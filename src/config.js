let config = {};

if (process.env.NODE_ENV === "production") {
}

if (process.env.NODE_ENV === "development") {
  config.apiBaseUrl = "http://localhost:3001";
  config.notificationsUrl = "http://localhost:4000";
}

export default config;
