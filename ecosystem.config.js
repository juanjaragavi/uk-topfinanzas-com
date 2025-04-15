module.exports = {
  apps: [
    {
      name: "uk-topfinanzas-com",
      script: "node_modules/.bin/next",
      args: "start -p ${PORT:-3004}",
      watch: false,
      autorestart: true,
      env_production: {
        NODE_ENV: "production",
        SENDGRID_API_KEY: "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",
        SENDER_EMAIL: "info@topfinanzas.com",
        RECIPIENT_EMAIL: "juan.jaramillo@topnetworks.co",
      },
    },
  ],
};
