import { Post } from "../../../component/Post/Post"
import { useEffect, useState } from "react"
import './BlogPost.css'
import { useNavigate } from "react-router"
import API from "../../../services"

const BlogPost = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState({
    id: 1,
    title: '',
    body: '',
    userId: 1
  })
  const [isUpdate, setIsUpdate] = useState(false);

  const getPost = async () => {
    const res = await API.getNewsBlog();
    setPosts(res);

  }

  const postData = () => {
    API.PostNewBlog(formData);
    setFormData({
      id: 1,
      title: '',
      body: '',
      userId: 1
    })
  }

  const putData = (data) => {
    API.UpdateNewsBlog(formData, data)
    setIsUpdate(!isUpdate)
    setFormData({
      id: 1,
      title: '',
      body: '',
      userId: 1
    })
    getPost()
  }
  const handleRemove = async (data) => {
    await API.DeleteNewsBlog(data).then(() => getPost())
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

  const handleDetail = (id) => {
    navigate(`/detail-post/${id}`, {
      state: {
        postID: id
      }
    })
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
          return <Post key={post.id} data={post} remove={handleRemove} update={handleUpdate} goDetail={handleDetail} />
        })}
      </div>
    </>
  )
}

export default BlogPost;