# Apache Proxy Configuration for Next.js Integration

This document outlines the Apache proxy configuration required to properly integrate the Next.js application with the existing WordPress installation.

## Configuration File

Create a file named `topfinanzas-next.conf` in the `/etc/apache2/conf-available/` directory:

```apache
# Proxy configuration for Next.js app
<IfModule mod_proxy.c>
    # Disable forward proxy
    ProxyRequests Off
    
    # Preserve host header
    ProxyPreserveHost On
    
    # Proxy for Next.js app - handles requests to the app
    <Location /mx/topfinanzas-pages-mx/>
        ProxyPass http://localhost:3003/
        ProxyPassReverse http://localhost:3003/
    </Location>
    
    # Static assets configuration
    Alias /mx/_next/ /var/www/html/mx/topfinanzas-pages-mx/.next/static/
    <Directory /var/www/html/mx/topfinanzas-pages-mx/.next/static/>
        Options FollowSymLinks
        AllowOverride None
        Require all granted
        Header set Cache-Control "public, max-age=31536000, immutable"
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
    </Directory>
</IfModule>
```

## Enabling the Configuration

After creating the configuration file, enable it and required modules with the following commands:

```bash
# Enable required Apache modules
sudo a2enmod proxy proxy_http expires headers

# Enable the Next.js proxy configuration
sudo a2enconf topfinanzas-next

# Test the Apache configuration for syntax errors
sudo apache2ctl configtest

# Reload Apache to apply the changes
sudo systemctl reload apache2
```

## Configuration Elements Explained

### ProxyRequests Off

```apache
ProxyRequests Off
```

This directive disables the forward proxy functionality. This is a security measure to prevent your server from being used as an open proxy.

### ProxyPreserveHost On

```apache
ProxyPreserveHost On
```

This ensures that the `Host` header from the original request is passed to the Next.js server. This is necessary for the Next.js application to properly handle URLs.

### Location Block

```apache
<Location /mx/topfinanzas-pages-mx/>
    ProxyPass http://localhost:3003/
    ProxyPassReverse http://localhost:3003/
</Location>
```

This configuration block:

- Defines that requests to `/mx/topfinanzas-pages-mx/` should be proxied
- `ProxyPass` forwards the requests to the Next.js server running on localhost port 3003
- `ProxyPassReverse` adjusts the HTTP response headers to make it appear as if they came directly from the original server

### Static Assets Configuration

```apache
Alias /mx/_next/ /var/www/html/mx/topfinanzas-pages-mx/.next/static/
<Directory /var/www/html/mx/topfinanzas-pages-mx/.next/static/>
    Options FollowSymLinks
    AllowOverride None
    Require all granted
    Header set Cache-Control "public, max-age=31536000, immutable"
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</Directory>
```

This block:

- Creates an alias for the `/mx/_next/` path to point to the Next.js static assets directory
- Sets proper permissions and options for the directory
- Configures aggressive caching headers for static assets, which helps improve performance
- The `immutable` directive indicates that the file will never change, improving browser caching behavior

## Considerations for SSL

If your site uses HTTPS (which it should), ensure the SSL configuration properly covers both WordPress and the Next.js application:

```apache
<VirtualHost *:443>
    ServerName topfinanzas.com
    ServerAlias www.topfinanzas.com
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key
    SSLCertificateChainFile /path/to/chain.crt
    
    # Include the Next.js proxy configuration
    Include conf-available/topfinanzas-next.conf
    
    # Other VirtualHost configuration...
</VirtualHost>
```

## Troubleshooting

### Common Issues

1. **503 Service Unavailable**: Check if the Next.js server is running

   ```bash
   pm2 status topfinanzas-next
   ```

2. **404 Not Found**: Verify the URL mapping and proxy configuration

   ```bash
   curl -v localhost:3003/recomendador-de-tarjetas-de-credito-p1-next
   ```

3. **Static assets not loading**: Check the alias and directory configuration

   ```bash
   ls -la /var/www/html/mx/topfinanzas-pages-mx/.next/static/
   ```

### Logging

To enable more detailed logging for troubleshooting proxy issues:

```apache
# Add to Apache config
LogLevel warn proxy:trace5
```

Then check the Apache error log:

```bash
tail -f /var/log/apache2/error.log
```

## Performance Optimizations

For better performance, consider adding these directives:

```apache
# Enable compression for text content
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Enable HTTP/2 if available
<IfModule mod_http2.c>
    Protocols h2 h2c http/1.1
</IfModule>
```

## Security Considerations

Consider adding these security headers to your Apache configuration:

```apache
# Security headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "no-referrer-when-downgrade"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
