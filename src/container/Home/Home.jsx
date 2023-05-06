import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";
import './Home.css';

const Home = () => {
  return (
    <>
      <nav>
        <div className='Navigation'>
          <a href="/">Blog Post</a>
          <a href="/product">Product</a>
          <a href="/lifecycle">LifeCycle</a>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/" exact element={<BlogPost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
        </Routes>
      </Router>
    </>
  )
}

export default Home;