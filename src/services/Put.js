import axios from "axios"
import { onlinePath, RootPath } from "./Config";


const Put = (path, root, data) => {
  return axios.put(`${root ? onlinePath : RootPath}/${path}`, data)
    .catch((err) => console.log(err));
}

export default Put;