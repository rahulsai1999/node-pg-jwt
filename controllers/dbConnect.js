import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
const pg_db = process.env.PG_DB;
const pg_user = process.env.PG_USER;
const pg_pass = process.env.PG_PASS;

const sequelize = new Sequelize(pg_db, pg_user, pg_pass, {
  host: "localhost",
  dialect: "postgres"
});

const connectAuthenticate = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected");
    })
    .catch(err => {
      console.log("Error");
    });
};

export { sequelize, connectAuthenticate };
