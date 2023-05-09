import axios from "axios"
import { onlinePath, RootPath } from "./Config";

const Get = (path, root) => {
  return axios.get(`${root ? onlinePath : RootPath}/${path}`)
    .then((res) => res.data)
    .catch((err) => console.log(err))
}

export default Get;