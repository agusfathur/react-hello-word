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
import { useState } from 'react';

export const RootContext = createContext();
const Provider = RootContext.Provider;

const Home = () => {

  const [state, setState] = useState({
    totalOrder: 1
  });

  const dispatch = (action) => {
    if (action.type === 'PLUS_ORDER') {
      setState({ totalOrder: state.totalOrder + 1 })
    }
    if (action.type === 'MINUS_ORDER' && state.totalOrder > 0) {
      setState({ totalOrder: state.totalOrder - 1 })
    }
  }
  return (
    <>
      <Router>
        <Provider value={{
          state: state,
          dispatch: dispatch
        }}>

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