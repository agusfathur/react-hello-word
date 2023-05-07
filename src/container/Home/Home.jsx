// libraries
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// pages
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import Product from '../Pages/Product/Product';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
// style
import './Home.css';

const Home = () => {
  return (
    <>
      <Router>

        <nav>
          <div className='Navigation'>
            <Link to="/" >Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtube-component">Youtube</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" exact element={<BlogPost />} />
          <Route path="/detail-post/:id" exact element={<DetailPost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/youtube-component" element={<YoutubeCompPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default Home;