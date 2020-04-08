import { Router } from "express";
import {
  createBlog,
  findAllBlogs,
  updateBlog,
  deleteBlog,
  findOneBlog,
} from "../controllers/blogCon";
import { welcomeUser } from "../controllers/protectedCon";
import { isLoggedIn } from "../util/authHelpers";

const router = Router();

//CRUD Routes
router.route("/blog").get(findAllBlogs).post(createBlog);
router.route("/blog/:id").get(findOneBlog).put(updateBlog).delete(deleteBlog);

// Protected Routes (accessible after authentication)
router.get("/protected", isLoggedIn, welcomeUser);

export default router;
