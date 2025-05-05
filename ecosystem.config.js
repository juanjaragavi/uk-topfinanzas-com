module.exports = {
  apps: [{
    name: "uk-topfinanzas-com",
    script: ".next/standalone/server.js",
    env_production: {
      PORT: 3004,
      NODE_ENV: "production",
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      SENDER_EMAIL: process.env.SENDER_EMAIL,
      RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
      VERTEX_AI_SEARCH_API_KEY: process.env.VERTEX_AI_SEARCH_API_KEY,
      NEXT_PUBLIC_KIT_API_KEY: process.env.NEXT_PUBLIC_KIT_API_KEY
    }
  }]
}
