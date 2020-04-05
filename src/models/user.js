import { sequelize } from "../util/dbConnect";
import { DataTypes } from "sequelize";
import shortid from "shortid";

const User = sequelize.define("users", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: shortid.generate,
  },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
});

export default User;
