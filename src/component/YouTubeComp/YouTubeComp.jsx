import React from "react";
import './YouTubeComp.css';
const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://source.unsplash.com/1280x720?vlog" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  )
}
// default props jika tidak dikirim props
YouTubeComp.defaultProps = {
  time : "00.00",
  title : "Title Here",
  desc : "xx ditonton . xx hari yang lalu"
}

export default YouTubeComp;