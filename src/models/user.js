import { sequelize } from "../util/dbConnect";
import { DataTypes } from "sequelize";
import shortid from "shortid";

const User = sequelize.define("users", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: shortid.generate,
  },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING },
});

export default User;
