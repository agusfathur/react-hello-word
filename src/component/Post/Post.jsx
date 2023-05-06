import './Post.css';

export const Post = (props) => {

  const { title, body, id } = props.data;
  const { remove, update, goDetail } = props;

  return (
    <>
      <div className="Card">
        <div className="Img">
          <img src="https://source.unsplash.com/480x480?laptop" alt="" className="Img-thumb" />
        </div>
        <div className="Post">
          <div className="Title">
            <h3 onClick={() => goDetail(id)} className='title' >{title ?? "Title"}</h3>
            <p>{body ?? "Body paragraph"}</p>
            <button className="Update" onClick={() => update(props.data)}>Update</button>
            <button className="Remove" onClick={() => {
              if (window.confirm('Delete this post')) remove(id)
            }}>Remove</button>
          </div>
        </div>
      </div >
    </>
  )
}