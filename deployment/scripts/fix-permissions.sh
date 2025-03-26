#!/bin/bash

# Script to fix permissions for the Next.js application
# and ensure it can be run properly with PM2

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
NEXT_DIR="/var/www/html/mx/topfinanzas-pages-mx"
NODE_MODULES="$NEXT_DIR/node_modules"
NEXT_BIN="$NODE_MODULES/.bin/next"
START_SCRIPT="$NEXT_DIR/start-nextjs.sh"
PORT="3003" # Ensure this matches package.json

# Step 1: Check Node.js installation and path
log "Checking Node.js installation"
echo "Node path: $(which node)"
echo "NPX path: $(which npx)"
echo "Node version: $(node -v)"
echo "User running script: $(whoami)"

# Step 2: Fix permissions for the Next.js directory
log "Fixing permissions for the Next.js directory"
chown -R www-data:www-data "$NEXT_DIR"
chmod -R 755 "$NEXT_DIR"
echo "Permissions updated"

# Step 3: Create a more robust start script that doesn't rely on global next
log "Creating updated start script with npx"
cat >"$START_SCRIPT" <<EOF
#!/bin/bash

# Next.js start script for WordPress integration

# Change to the Next.js app directory
cd "$NEXT_DIR"

# Set environment variables
export NODE_ENV=production
export PORT=$PORT

# Use npx to ensure we're using the local next installation
echo "Starting Next.js server at \$(date)"
echo "Using npx to run next from $NODE_MODULES/.bin"
npx next start -p $PORT
EOF

chmod +x "$START_SCRIPT"
echo "Start script created and made executable"

# Step 4: Create a SystemD service for better reliability (optional)
log "Creating SystemD service for Next.js (optional)"
cat >"/etc/systemd/system/nextjs-topfinanzas.service" <<EOF
[Unit]
Description=Next.js application for TopFinanzas Mexico
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=$NEXT_DIR
ExecStart=/bin/bash $START_SCRIPT
Restart=on-failure
Environment=NODE_ENV=production PORT=$PORT

[Install]
WantedBy=multi-user.target
EOF

echo "SystemD service created"

# Step 5: Restart PM2 process with proper user
log "Restarting Next.js application with PM2"
pm2 delete topfinanzas-next 2>/dev/null || true
su -c "cd '$NEXT_DIR' && pm2 start '$START_SCRIPT' --name 'topfinanzas-next'" www-data ||
    pm2 start "$START_SCRIPT" --name "topfinanzas-next" --uid www-data
pm2 save

log "Permissions fix completed!"
echo "To check the status: sudo pm2 status"
echo "To view logs: sudo pm2 logs topfinanzas-next"
echo "If issues persist, you can start the SystemD service:"
echo "sudo systemctl start nextjs-topfinanzas"
