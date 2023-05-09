import axios from "axios"
import { onlinePath, RootPath } from "./Config";

const Get = (path, root) => {
  return axios.get(`${root ? onlinePath : RootPath}/${path}`)
    .then((res) => res.data)
    .catch((err) => err)
}

export default Get;