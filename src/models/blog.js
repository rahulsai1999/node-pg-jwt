import { sequelize } from "../util/dbConnect";
import { DataTypes } from "sequelize";
import shortid from "shortid";

const Blog = sequelize.define("blogs", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: shortid.generate,
  },
  title: { type: DataTypes.STRING },
  author: { type: DataTypes.STRING },
  body: { type: DataTypes.STRING },
});

export default Blog;
