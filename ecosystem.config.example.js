module.exports = {
  apps: [{
    name: "uk-topfinanzas-com",
    script: ".next/standalone/server.js",
    env_production: {
      PORT: 3004,
      NODE_ENV: "production",
      SENDGRID_API_KEY: "YOUR_SENDGRID_API_KEY",
      SENDER_EMAIL: "YOUR_SENDER_EMAIL",
      RECIPIENT_EMAIL: "YOUR_RECIPIENT_EMAIL",
      VERTEX_AI_SEARCH_API_KEY: "YOUR_VERTEX_AI_SEARCH_API_KEY",
      NEXT_PUBLIC_KIT_API_KEY: "YOUR_NEXT_PUBLIC_KIT_API_KEY"
    }
  }]
}
