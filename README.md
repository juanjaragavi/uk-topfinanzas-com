# Top Finanzas - Next.js Project

This is a Next.js project for Top Finanzas, a financial services website. It includes a blog, credit card comparison tools, and other financial services.

## Environment Setup

1. Copy .env.example to .env.production
2. Populate with actual values
3. Never commit sensitive files
4. On the server, environment files are stored in /opt/app with strict permissions

## Deployment

To deploy the application:

```bash
pm2 start ecosystem.config.js --env production
```

## API Key Management

All API keys and sensitive information are managed through environment variables and should never be hardcoded in the application code.
