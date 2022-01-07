module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", process.env.MONGODB_HOST),
        srv: env.bool("DATABASE_SRV", process.env.MONGODB_SRV),
        port: env.int("DATABASE_PORT", process.env.MONGODB_PORT),
        database: env("DATABASE_NAME", process.env.MONGODB_NAME),
        username: env("DATABASE_USERNAME", process.env.MONGODB_USERNAME),
        password: env("DATABASE_PASSWORD", process.env.MONGODB_PASSWORD),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
