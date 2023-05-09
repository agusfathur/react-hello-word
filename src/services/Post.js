import axios from "axios"
import { onlinePath, RootPath } from "./Config";

const Post = (path, root, data) => {
  return axios.post(`${root ? onlinePath : RootPath}/${path}`, data)
    .catch((err) => err);
}

export default Post;