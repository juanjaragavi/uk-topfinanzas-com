#!/bin/bash

# Enhanced deployment script for TopFinanzas Next.js application
# Optimized to handle content updates from LLM-based Agents via n8n workflows
# Supports both content-only updates and code changes

# Configuration
LOG_FILE="/var/log/topfinanzas-rebuilds.log"
PROJECT_DIR="/var/www/topfinanzas-pages"
CONTENT_DIR="${PROJECT_DIR}/lib/pages/credit-cards/content"
BACKUP_DIR="${PROJECT_DIR}/lib/pages/backups/$(date +%Y%m%d_%H%M%S)"
UPDATE_TYPE="${1:-full}" # Default to full update if not specified
DEPLOY_ID="$(date +%Y%m%d%H%M%S)"
STATUS_FILE="/tmp/deploy_status_${DEPLOY_ID}.json"

# Function for logging with timestamps
log_message() {
    local level="$1"
    local message="$2"
    echo "$(date +'%Y-%m-%d %H:%M:%S') [${level}] [${DEPLOY_ID}]: ${message}" | tee -a $LOG_FILE
}

# Function to report status back (useful for n8n workflow integration)
report_status() {
    local status="$1"
    local message="$2"
    local details="${3:-{}}"

    # Create JSON status output
    echo "{\"status\":\"${status}\",\"message\":\"${message}\",\"deploy_id\":\"${DEPLOY_ID}\",\"timestamp\":\"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\",\"details\":${details}}" >$STATUS_FILE

    # Also log the status message
    log_message "${status}" "${message}"

    # If status is error, exit with failure code
    if [ "$status" = "ERROR" ]; then
        exit 1
    fi
}

# Create backups of content files before making changes
backup_content() {
    log_message "INFO" "Creating content backup in ${BACKUP_DIR}"
    mkdir -p "${BACKUP_DIR}"

    if [ -d "$CONTENT_DIR" ]; then
        cp -r "$CONTENT_DIR"/* "${BACKUP_DIR}/"
        log_message "INFO" "Content backup completed successfully"
    else
        log_message "WARNING" "Content directory not found, skipping backup"
    fi
}

# Validate JSON content files for syntax errors
validate_content() {
    log_message "INFO" "Validating JSON content files"
    local has_errors=false

    # Find all JSON files in the content directory and validate them
    find "$CONTENT_DIR" -name "*.json" -type f | while read -r file; do
        if ! jq empty "$file" 2>/dev/null; then
            log_message "ERROR" "Invalid JSON syntax in file: $file"
            has_errors=true
        fi
    done

    if [ "$has_errors" = true ]; then
        report_status "ERROR" "Content validation failed - JSON syntax errors detected" "{\"restored_backup\":true}"
        # Restore from backup
        cp -r "${BACKUP_DIR}"/* "$CONTENT_DIR/"
        return 1
    fi

    log_message "INFO" "All content files validated successfully"
    return 0
}

# Main deployment process
log_message "INFO" "Starting deployment process (Type: ${UPDATE_TYPE})"

# Navigate to project directory
cd $PROJECT_DIR || {
    report_status "ERROR" "Could not navigate to project directory"
}

# Backup current content
backup_content

# Process based on update type
if [ "$UPDATE_TYPE" = "content-only" ]; then
    log_message "INFO" "Processing content-only update"

    # Validate content before proceeding
    validate_content || exit 1

    # For content-only updates, we only need to rebuild, not pull code
    log_message "INFO" "Skipping git pull for content-only update"
else
    log_message "INFO" "Processing full update (code + content)"

    # Pull latest changes from git
    log_message "INFO" "Pulling latest code changes"
    sudo git fetch --all
    sudo git merge origin/main

    if [ $? -ne 0 ]; then
        report_status "ERROR" "Git pull failed" "{\"git_error\":true}"
    fi

    # Validate content after code pull
    validate_content || exit 1

    # Install dependencies if package.json changed
    if git diff --name-only HEAD@{1} | grep -q "package.json"; then
        log_message "INFO" "package.json changed, installing dependencies"
        sudo npm install

        if [ $? -ne 0 ]; then
            report_status "ERROR" "Dependency installation failed"
        fi
    fi

    # For full updates, clean the cache more thoroughly
    log_message "INFO" "Cleaning build cache"
    sudo rm -rf .next
    sudo npm cache clean --force
fi

# Build the Next.js application
log_message "INFO" "Building Next.js application"
sudo npm run build

if [ $? -eq 0 ]; then
    log_message "SUCCESS" "Build completed successfully"

    # Update application - restart PM2 service
    log_message "INFO" "Restarting application service"
    sudo pm2 restart topfinanzas-pages

    # Wait for service to restart
    sleep 3

    # Check if service is running properly
    sudo pm2 show topfinanzas-pages | grep -q "online"

    if [ $? -eq 0 ]; then
        # Save PM2 configuration
        sudo pm2 save

        # Report success
        report_status "SUCCESS" "Deployment completed successfully" "{\"update_type\":\"${UPDATE_TYPE}\"}"

        # For monitoring, log memory usage after deployment
        log_message "INFO" "Current memory usage: $(free -m | grep Mem | awk '{print $3}')MB / $(free -m | grep Mem | awk '{print $2}')MB"
        exit 0
    else
        report_status "ERROR" "Service restart failed" "{\"pm2_error\":true,\"restored_backup\":false}"
    fi
else
    report_status "ERROR" "Build failed" "{\"build_error\":true,\"restored_backup\":false}"
fi
