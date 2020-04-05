import { sequelize } from "../controllers/dbConnect";
import { Sequelize } from "sequelize";

const Blog = sequelize.define("blogs", {
  title: { type: Sequelize.STRING },
  author: { type: Sequelize.STRING },
  body: { type: Sequelize.STRING },
});

export default Blog;
