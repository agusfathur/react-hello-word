import axios from "axios"
import { Post } from "../../component/Post/Post"
import { useEffect, useState } from "react"
import './BlogPost.css'

export const BlogPost = () => {

  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState({
    id: 1,
    title: '',
    body: '',
    userId: 1
  })

  const getPost = async () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((results) => setPosts(results.data));
  }

  const postData = () => {
    axios.post('http://localhost:3004/posts', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  const handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then(getPost())
  }

  const handleForChange = (event) => {
    const timeStamp = new Date().getTime();
    let setFormDataNew = { ...formData };
    setFormDataNew['id'] = timeStamp;
    setFormDataNew[event.target.name] = event.target.value;
    setFormData(setFormDataNew)

  }

  const handleSubmit = () => {
    postData();
    getPost()
  }

  useEffect(() => {
    getPost()
  }, [])
  return (
    <>
      <h3 className="section-title">Blog Post</h3>
      <div className="form-add-post">
        <label htmlFor="title">Ttile</label>
        <input type="text" name="title" placeholder="add title" id="title" onChange={handleForChange} />
        <label htmlFor="body">Blog Content</label>
        <textarea name="body" cols="30" rows="10" id="body" onChange={handleForChange} ></textarea>
        <button className="btn-submit" onClick={handleSubmit}>Simpan</button>
      </div>
      <div className="Blog">
        {posts.map((post) => {
          return <Post key={post.id} data={post} remove={handleRemove} />
        })}
      </div>
    </>
  )
}