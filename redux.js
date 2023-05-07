const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 17
}

// Reducer --setter
const rootReducer = (state = initialState, action) => {
  return state;
} // wadah besar untuk menyimpan object2
// Store --getter

const store = createStore(rootReducer);
console.log(store.getState());

// Dispathing Action --pemenggilan Reducer

// Subcription --pemanggilan store yang diperlukan