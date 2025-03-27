#!/bin/bash

# Next.js start script for WordPress integration

# Change to the Next.js app directory
cd "/var/www/html/mx/topfinanzas-pages-mx"

# Set environment variables
export NODE_ENV=production
export PORT=3003

# Use npx to ensure we're using the local next installation
echo "Starting Next.js server at $(date)"
echo "Using npx to run next from /var/www/html/mx/topfinanzas-pages-mx/node_modules/.bin"
npx next start -p 3003
