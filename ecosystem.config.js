module.exports = {
  apps: [
    {
      name: "uk-topfinanzas-com",
      script: ".next/standalone/server.js",
      env: {
        PORT: 3004,
        NODE_ENV: "production",
        // API keys and environment variables (use placeholders for security)
        SENDGRID_API_KEY: "SENDGRID_API_KEY_PLACEHOLDER", // Replace on server
        SENDER_EMAIL: "info@topfinanzas.com",
        RECIPIENT_EMAIL: "juan.jaramillo@topnetworks.co",
        VERTEX_AI_SEARCH_API_KEY: "VERTEX_AI_KEY_PLACEHOLDER", // Replace on server
        NEXT_PUBLIC_KIT_API_KEY: "KIT_API_KEY_PLACEHOLDER" // Replace on server
      },
    },
  ],
};
