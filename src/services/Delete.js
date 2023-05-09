import axios from "axios"
import { onlinePath, RootPath } from "./Config";

const Delete = (path, root) => {
  return axios.delete(`${root ? onlinePath : RootPath}/${path}`)
    .catch(err => console.log(err))
}

export default Delete;