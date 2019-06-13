import Knex from "knex";
import dotenv from "dotenv";
dotenv.config()

const config = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
};

const pg = Knex({
  client: "pg",
  connection: config
});

export default pg;
