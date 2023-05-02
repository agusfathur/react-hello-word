import React, {Component} from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";

class Home extends Component {
  render(){
    return(
      <>
        <YouTubeComp time="07.11" title="Bagian - 1" desc="200x ditonton . 10 hari yang lalu"/>
        <YouTubeComp time="09.11" title="Bagian - 2" desc="10x ditonton . 9 hari yang lalu"/>
        <YouTubeComp time="11.11" title="Bagian - 3" desc="100x ditonton . 7 hari yang lalu"/>
        <YouTubeComp time="10.51" title="Bagian - 4" desc="300x ditonton . 5 hari yang lalu"/>
        <YouTubeComp time="08.20" title="Bagian - 5" desc="1x ditonton . 4 hari yang lalu"/>
        <YouTubeComp/>
      </>
    )
  }
}

export default Home;