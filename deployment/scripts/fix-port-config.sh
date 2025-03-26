#!/bin/bash

# Script to fix port configuration for Next.js integration with WordPress
# This script should be run on the server with sudo privileges

# Log function for better readability
log() {
    echo -e "\n\033[1;36m>> $1\033[0m\n"
}

# Variables
NEXT_DIR="/var/www/html/mx/topfinanzas-pages-mx"
APACHE_CONF="/etc/apache2/conf-available/topfinanzas-next.conf"
START_SCRIPT="$NEXT_DIR/start-nextjs.sh"
PORT="3003" # Ensure this matches package.json

# Step 1: Fix the start script
log "Fixing Next.js start script"
cat >"$START_SCRIPT" <<EOF
#!/bin/bash
cd "$NEXT_DIR"
export NODE_ENV=production
export PORT=$PORT
npm run start
EOF
chmod +x "$START_SCRIPT"

# Step 2: Update Apache configuration to match the port
log "Updating Apache configuration"
sed -i "s|http://localhost:[0-9]\+/|http://localhost:$PORT/|g" "$APACHE_CONF"

# Step 3: Restart services
log "Restarting services"
systemctl reload apache2
pm2 delete topfinanzas-next || true
pm2 start "$START_SCRIPT" --name "topfinanzas-next"
pm2 save

log "Configuration fixed!"
echo "Next.js server now running on port $PORT"
echo "To verify, check: sudo pm2 status"
echo "And test the URL: https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next"
