/* eslint-disable no-undef */
import { createContext, useState } from "react"

export const RootContext = createContext();
const Provider = RootContext.Provider;

// const ParentComp = (Children) => {
//   const [state, setState] = useState({
//     totalOrder: 1
//   });

//   // eslint-disable-next-line no-unused-vars
//   const dispatch = (action) => {
//     if (action.type === 'PLUS_ORDER') {
//       setState({ totalOrder: state.totalOrder + 1 })
//     }
//     if (action.type === 'MINUS_ORDER' && state.totalOrder > 0) {
//       setState({ totalOrder: state.totalOrder - 1 })
//     }
//   }
//   return (
//     <Provider>
//       <Children {...props} />
//     </Provider>
//   )
// };
const GlobalProvider = (Children) => {
  const [state, setState] = useState({
    totalOrder: 1
  });

  // eslint-disable-next-line no-unused-vars
  const dispatch = (action) => {
    if (action.type === 'PLUS_ORDER') {
      setState({ totalOrder: state.totalOrder + 1 })
    }
    if (action.type === 'MINUS_ORDER' && state.totalOrder > 0) {
      setState({ totalOrder: state.totalOrder - 1 })
    }
  }
  return (
    <Provider value={{
      state: state,
      dispatch: dispatch
    }}>
      <Children {...Children.props} />
    </Provider>
  )


}
export default GlobalProvider;