#!/bin/bash

# Script to verify the WordPress-Next.js integration remotely

# Exit on error
set -e

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
GCP_INSTANCE="topfinanzas-com"
ZONE="us-central1-a"

log "Verifying Next.js integration with WordPress"

# Step 1: Check if the fix-port-config.sh script needs to be applied
log "Checking if port configuration fix is needed"
echo "Remote script execution (requires sudo):"
echo "gcloud compute ssh $GCP_INSTANCE --zone=$ZONE --command=\"sudo bash -c 'cat > /tmp/fix-port-config.sh' && sudo chmod +x /tmp/fix-port-config.sh && sudo /tmp/fix-port-config.sh\""

# Step 2: Check Apache configuration
log "Checking Apache configuration"
gcloud compute ssh $GCP_INSTANCE --zone=$ZONE --command="
if [ -f /etc/apache2/conf-available/topfinanzas-next.conf ] && [ -f /etc/apache2/conf-enabled/topfinanzas-next.conf ]; then
    echo 'Apache configuration: ✅ Properly configured'
else
    echo 'Apache configuration: ❌ Issue with configuration'
    echo 'Fix with: sudo a2enconf topfinanzas-next && sudo systemctl reload apache2'
fi"

# Step 3: Check PM2 status
log "Checking PM2 process status"
gcloud compute ssh $GCP_INSTANCE --zone=$ZONE --command="
if pm2 list | grep -q 'topfinanzas-next.*online'; then
    echo 'PM2 process: ✅ Running properly'
else
    echo 'PM2 process: ❌ Not running or has errors'
    echo 'Check with: sudo pm2 logs topfinanzas-next --lines 20'
    echo 'Fix with: sudo pm2 restart topfinanzas-next'
fi"

# Step 4: Check URL accessibility
log "Checking URL accessibility (HTTP status code)"
gcloud compute ssh $GCP_INSTANCE --zone=$ZONE --command="
status=\$(curl -s -o /dev/null -w '%{http_code}' https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next)
if [ \"\$status\" = \"200\" ]; then
    echo 'URL accessibility: ✅ Next.js page is accessible (HTTP 200)'
else
    echo 'URL accessibility: ❌ Next.js page is not accessible (HTTP '\$status')'
    echo 'Check your URL routing configuration'
fi"

log "Verification complete!"
echo "If any issues were found, use the provided commands to fix them or run the fix-port-config.sh script."
