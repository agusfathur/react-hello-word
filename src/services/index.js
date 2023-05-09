import axios from "axios";

const RootPath = `http://localhost:3004`
const onlinePath = 'https://jsonplaceholder.typicode.com'
const Get = (path, root) => {
  return axios.get(`${root ? onlinePath : RootPath}/${path}`)
    .then((res) => res.data)
    .catch((err) => err)
}

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComment = () => Get('comments', true);

const API = {
  getNewsBlog,
  getComment
}

export default API;