import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import './DetailPost.css';

const DetailPost = () => {
  const location = useLocation();
  const [dataPost, setDataPost] = useState({
    title: "",
    body: ""
  })
  const getDetail = async () => {
    const postID = location.state.postID
    const result = await axios.get(`http://localhost:3004/posts/${postID}`)
    setDataPost({
      title: result.data.title,
      body: result.data.body
    })
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <>
      <div className="container">
        <h3 className="detail-title">Detail Post : <span>{dataPost.title}</span></h3>
        <p className="detail-body">{dataPost.body}</p>
      </div>
    </>
  )
}

export default DetailPost;