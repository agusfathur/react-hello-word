import axios from "axios";
import Get from "./Get";
import Post from "./Post";
// POST
const PostNewBlog = (data) => Post('posts', false, data);

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComment = () => Get('comments', true);
const API = {
  PostNewBlog,
  getNewsBlog,
  getComment
}

export default API;