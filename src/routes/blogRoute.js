import { Router } from "express";
import {
  createBlog,
  findAllBlogs,
  updateBlog,
  deleteBlog,
  findOneBlog,
} from "../controllers/blogCon";

const router = Router();

router.route("/blog").get(findAllBlogs).post(createBlog);
router.route("/blog/:id").get(findOneBlog).put(updateBlog).delete(deleteBlog);

export default router;
