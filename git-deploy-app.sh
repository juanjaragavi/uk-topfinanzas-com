#!/bin/bash

# Description:
# This script executes both the git_rebuild_app.sh script (which pulls the latest
# changes and rebuilds the application) and the restart_service.sh script
# (which restarts the PM2 service).

# Variables
LOG_DIR="/var/log/app-rebuilds"
LOG_FILE="${LOG_DIR}/pages_git_deploy_app.log"
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")/scripts"

# Functions

# Log messages to a file
log_message() {
    # Create log directory if it doesn't exist
    mkdir -p "$(dirname "$LOG_FILE")"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >>"$LOG_FILE"
}

# Check if a command executed successfully
check_error() {
    local exit_code=$?
    local error_message="$1"

    if [ $exit_code -ne 0 ]; then
        log_message "Error: $error_message (Exit code: $exit_code)"
        echo "Error: $error_message (Exit code: $exit_code)"
        exit $exit_code
    fi
}

# Main Script Execution
log_message "Starting complete deployment process."

# Step 1: Check if the script directory exists
if [ ! -d "$SCRIPT_DIR" ]; then
    log_message "Error: Script directory does not exist: $SCRIPT_DIR"
    echo "Error: Script directory does not exist: $SCRIPT_DIR"
    exit 1
fi
log_message "Script directory found: $SCRIPT_DIR"

# Step 2: Execute git_rebuild_app.sh
log_message "Executing git_rebuild_app.sh"
sudo bash "${SCRIPT_DIR}/git_rebuild_app.sh"
check_error "Failed to execute git_rebuild_app.sh"

# Step 3: Execute restart_service.sh
log_message "Executing restart_service.sh"
sudo bash "${SCRIPT_DIR}/restart_service.sh"
check_error "Failed to execute restart_service.sh"

log_message "Complete deployment process finished successfully."
echo "Deployment completed successfully. Check the log file ($LOG_FILE) for details."
