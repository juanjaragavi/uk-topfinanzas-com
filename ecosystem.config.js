module.exports = {
  apps: [
    {
      name: "uk-topfinanzas-com",
      script: ".next/standalone/server.js",
      env: {
        PORT: 3004,
        NODE_ENV: "production",
      },
    },
  ],
};
