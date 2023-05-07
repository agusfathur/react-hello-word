import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  totalOrder: 0
}

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === 'PLUS_ORDER') {
    let totalOrder = state.totalOrder
    return {
      ...state,
      totalOrder: totalOrder + 1
    }
  }

  if (action.type === 'MINUS_ORDER' && state.totalOrder > 0) {
    let totalOrder = state.totalOrder;
    return {
      ...state,
      totalOrder: totalOrder - 1
    }
  }
  return state;
}

// Store
const storeRedux = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux} >
      <Home />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
