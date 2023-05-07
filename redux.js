const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 17
}

// Reducer --function yang bisa merubah value store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      return {
        ...state,
        age: state.age + 1
      }
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: state.value + action.newValue
      }
    default:
      return state;
  }
} // wadah besar untuk menyimpan object2

// Store --wadah
const store = createStore(rootReducer);
console.log(store.getState());

// Subcription --terpanggil jika ada perubahan di store
store.subscribe(() => console.log('store change:', store.getState()))

// Dispathing Action --pemenggilan Reducer
// dispatch : function yang hanya mengisi value dari action pada reducer,
// dispatch : isi dengan dispatch({ type: value })
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 })
console.log(store.getState());
