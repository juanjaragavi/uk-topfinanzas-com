#!/bin/bash

# ========================================================
# TopFinanzas Mexico - Deployment Script
# ========================================================
# This script prepares and executes the deployment process for
# integrating the Next.js application with WordPress
# ========================================================

# Exit on error
set -e

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
DEPLOYMENT_CONFIG_DIR="$SCRIPT_DIR"
GCP_INSTANCE="topfinanzas-com" # GCP instance name
REMOTE_TMP_DIR="/tmp"
WP_DIR="/var/www/html/mx"
DEPLOY_ID="$(date +%Y%m%d%H%M%S)"

# Step 1: Update repo URL in integration script
log "Updating repository URL in integration script"
sed -i '' "s|https://github.com/yourusername/topfinanzas-pages-mx.git|https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/').git|g" "$DEPLOYMENT_CONFIG_DIR/wordpress-integration.sh"

# Step 2: Create .env.production file if it doesn't exist
if [ ! -f "$REPO_DIR/.env.production" ]; then
    log "Creating .env.production file"
    cat >"$REPO_DIR/.env.production" <<'EOF'
# Production environment configuration for WordPress integration
NODE_ENV=production
NEXT_PUBLIC_ASSET_PREFIX=/mx/topfinanzas-pages-mx
NEXT_PUBLIC_BASE_PATH=/mx
EOF
    log "Created .env.production file"
else
    log ".env.production file already exists, skipping"
fi

# Step 3: Copy deployment files to server
log "Copying deployment files to server"
gcloud compute scp "$DEPLOYMENT_CONFIG_DIR/wordpress-integration.sh" "$GCP_INSTANCE:$REMOTE_TMP_DIR/" --zone=us-central1-a
gcloud compute scp "$DEPLOYMENT_CONFIG_DIR/README.md" "$GCP_INSTANCE:$REMOTE_TMP_DIR/README-WORDPRESS-INTEGRATION.md" --zone=us-central1-a

# Step 4: Make the integration script executable on the server
log "Making integration script executable"
gcloud compute ssh "$GCP_INSTANCE" --zone=us-central1-a --command="chmod +x $REMOTE_TMP_DIR/wordpress-integration.sh"

# Step 5: Provide instructions for executing the integration script
log "Deployment files copied to server"
echo ""
echo "====================================================================="
echo "                  INTEGRATION INSTRUCTIONS                           "
echo "====================================================================="
echo ""
echo "The deployment files have been copied to GCP instance: $GCP_INSTANCE."
echo ""
echo "Next steps:"
echo ""
echo "1. SSH into the server:"
echo "   gcloud compute ssh $GCP_INSTANCE --zone=us-central1-a"
echo ""
echo "2. Execute the integration script:"
echo "   sudo $REMOTE_TMP_DIR/wordpress-integration.sh"
echo ""
echo "3. Review the README for troubleshooting:"
echo "   cat $REMOTE_TMP_DIR/README-WORDPRESS-INTEGRATION.md"
echo ""
echo "4. Verify the integration using the verification checklist"
echo ""
echo "====================================================================="
echo ""

log "Deployment preparation completed successfully!"
