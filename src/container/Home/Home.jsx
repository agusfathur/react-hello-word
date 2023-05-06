// libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// pages
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import Product from '../Pages/Product/Product';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
// style
import './Home.css';

const Home = () => {
  return (
    <>
      <nav>
        <div className='Navigation'>
          <a href="/">Blog Post</a>
          <a href="/product">Product</a>
          <a href="/lifecycle">LifeCycle</a>
          <a href="/youtube-component">Youtube</a>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/" exact element={<BlogPost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/youtube-component" element={<YoutubeCompPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default Home;