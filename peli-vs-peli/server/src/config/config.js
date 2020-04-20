module.exports = {
    port:  process.env.NODE_PORT || 5000,
    mysql: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "root",
      database: process.env.DB_DATABASE || "competencias",
      connectionLimit: process.env.DB_CONNLIMIT || 10
    }
}