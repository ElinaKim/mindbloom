import type { Knex } from 'knex'
import dotnev from 'dotenv'

dotnev.config()

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
};

module.exports = config;
