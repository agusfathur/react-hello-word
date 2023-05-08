// libraries
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { createContext } from 'react';
// pages
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import Product from '../Pages/Product/Product';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
// style
import './Home.css';

export const RootContext = createContext();
const Provider = RootContext.Provider;

const Home = () => {
  const state = {
    totalOrder: 5
  };
  return (
    <>
      <Router>
        <Provider value={state}>

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
        </Provider>

      </Router>
    </>
  )
}

export default Home;