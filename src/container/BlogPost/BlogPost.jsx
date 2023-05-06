import axios from "axios"
import { Post } from "../../component/Post/Post"
import { useEffect, useState } from "react"
import './BlogPost.css'

const BlogPost = () => {

  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState({
    id: 1,
    title: '',
    body: '',
    userId: 1
  })
  const [isUpdate, setIsUpdate] = useState(false);

  const getPost = async () => {
    // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
    //   .then((results) => setPosts(results.data));
    const res = await axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
    setPosts(res.data)

  }

  const postData = () => {
    axios.post('http://localhost:3004/posts', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setFormData({
      id: 1,
      title: '',
      body: '',
      userId: 1
    })
  }

  const putData = (data) => {
    axios.put(`http://localhost:3004/posts/${data}`, formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setIsUpdate(!isUpdate)
    setFormData({
      id: 1,
      title: '',
      body: '',
      userId: 1
    })
  }
  const handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then(getPost())
  }

  const handleUpdate = (data) => {
    setFormData(data)
    setIsUpdate(!isUpdate);
  }

  const handleForChange = (event) => {
    let setFormDataNew = { ...formData };
    if (!isUpdate) {
      const timeStamp = new Date().getTime();
      setFormDataNew['id'] = timeStamp;
    }
    setFormDataNew[event.target.name] = event.target.value;
    setFormData(setFormDataNew)
  }

  const handleSubmit = () => {
    if (isUpdate) {
      putData(formData.id)
    } else {
      postData();
    }
    getPost();
  }

  useEffect(() => {
    getPost()
  }, [])
  return (
    <>
      <p>Halaman Blog Posts</p>
      <hr />
      <h2 className="section-title">Blog Post</h2>
      <div className="form-add-post">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="add title" id="title" value={formData.title} onChange={handleForChange} />
        <label htmlFor="body">Blog Content</label>
        <textarea name="body" cols="30" rows="10" id="body" value={formData.body} onChange={handleForChange} ></textarea>
        <button className="btn-submit" onClick={handleSubmit}>Simpan</button>
      </div>
      <div className="Blog">
        {posts.map((post) => {
          return <Post key={post.id} data={post} remove={handleRemove} update={handleUpdate} />
        })}
      </div>
    </>
  )
}

export default BlogPost;