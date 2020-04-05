import { Router } from "express";
import {
  createBlog,
  findAllBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blogCon";

const router = Router();

router.route("/blog").get(findAllBlogs).post(createBlog);
router.route("/blog/:id").put(updateBlog).delete(deleteBlog);

export default router;
