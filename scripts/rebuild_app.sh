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
# git pull origin main

# Install dependencies (if needed)
# npm install

# Build the Next.js application
echo "$(date): Building Next.js application" >>$LOG_FILE
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "$(date): Build successful" >>$LOG_FILE

    # Restart the service (adjust based on your deployment setup)
    echo "$(date): Restarting service" >>$LOG_FILE
    pm2 restart topfinanzas

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
