import { sequelize } from "../controllers/dbConnect";
import { Sequelize } from "sequelize/types";

const User = sequelize.define("usertable", {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

export default User;
