import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

// POST
const PostNewBlog = (data) => Post('posts', false, data);

// PUT
const UpdateNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

// DELETE
const DeleteNewsBlog = (id) => Delete(`posts/${id}`, false);
// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComment = () => Get('comments', true);
const API = {
  PostNewBlog,
  UpdateNewsBlog,
  DeleteNewsBlog,
  getNewsBlog,
  getComment
}

export default API;