import ActionType from "./globalActionType"

const globalState = {
  totalOrder: 0
}

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === ActionType.PLUS_ORDER) {
    let totalOrder = state.totalOrder
    return {
      ...state,
      totalOrder: totalOrder + 1
    }
  }

  if (action.type === ActionType.MINUS_ORDER && state.totalOrder > 0) {
    let totalOrder = state.totalOrder;
    return {
      ...state,
      totalOrder: totalOrder - 1
    }
  }
  return state;
}

export default rootReducer;