module.exports = {
  apps: [
    {
      name: "uk-topfinanzas-com",
      script: ".next/standalone/server.js",
      env: {
        PORT: 3004,
        NODE_ENV: "production",
        // API keys and environment variables
        SENDGRID_API_KEY:
          "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",
        SENDER_EMAIL: "info@topfinanzas.com",
        RECIPIENT_EMAIL: "juan.jaramillo@topnetworks.co",
      },
    },
  ],
};
