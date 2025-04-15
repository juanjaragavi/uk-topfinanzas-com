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
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        SENDER_EMAIL: process.env.SENDER_EMAIL,
        RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
      },
    },
  ],
};
