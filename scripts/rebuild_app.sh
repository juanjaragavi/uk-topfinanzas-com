#!/bin/bash

# This script rebuilds the Next.js application after content updates
# It is designed to be called by the n8n workflow

# Log file for tracking rebuild process
LOG_FILE="/var/log/topfinanzas-rebuilds.log"

# Project directory
PROJECT_DIR="/var/www/topfinanzas-pages"

# Log start time
echo "$(date): Starting rebuild process" >>$LOG_FILE

# Navigate to project directory
cd $PROJECT_DIR

# Pull latest changes if using git (optional)
sudo git fetch --all
sudo git merge origin/main

# Check if pull was successful
if [ $? -ne 0 ]; then
    echo "$(date): ERROR - Git pull failed" >>$LOG_FILE
    exit 1
fi

# Purge cache
sudo rm -rf .next
sudo npm cache clean --force

# Install dependencies (if needed)
sudo npm install

# Build the Next.js application
echo "$(date): Building Next.js application" >>$LOG_FILE
sudo npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "$(date): Build successful" >>$LOG_FILE

    # Restart the service (adjust based on your deployment setup)
    echo "$(date): Restarting service" >>$LOG_FILE
    sudo pm2 restart topfinanzas-pages
    # Wait for service to restart
    log_message "Waiting for processes to restart"
    sleep 2

    # Save the PM2 configuration
    log_message "Saving PM2 configuration"
    sudo pm2 save
    check_error "Failed to save PM2 configuration"

    # Step 5: Configure PM2 to start on system boot
    log_message "Configuring PM2 to start on system boot"
    sudo pm2 startup
    check_error "Failed to configure PM2 startup"

    # Check if restart was successful
    if [ $? -eq 0 ]; then
        echo "$(date): Service restart successful" >>$LOG_FILE
        exit 0
    else
        echo "$(date): ERROR - Service restart failed" >>$LOG_FILE
        exit 1
    fi
else
    echo "$(date): ERROR - Build failed" >>$LOG_FILE
    exit 1
fi
