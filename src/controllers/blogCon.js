import Blog from "../models/blog";

const createBlog = (req, res) => {
  const { title, author, body } = req.body;
  Blog.create({ title: title, author: author, body: body }).then((blog) => {
    res.json({ message: "Blog created", result: blog });
  });
};

const findAllBlogs = (req, res) => {
  Blog.findAll().then((blogs) => {
    res.json({ message: "Blogs retrieved", result: blogs });
  });
};

const updateBlog = (req, res) => {
  const { id } = req.params;
  const { title, author, body } = req.body;
  Blog.update(
    { title: title, author: author, body: body },
    { where: { id: id } }
  ).then((blog) => {
    res.json({ message: `Blog ${id} updated`, result: blog });
  });
};

const deleteBlog = (req, res) => {
  const { id } = req.params;
  Blog.destroy({ where: { id: id } }).then(() => {
    res.json({ message: `Blog ${id} deleted` });
  });
};

export { createBlog, findAllBlogs, updateBlog, deleteBlog };
