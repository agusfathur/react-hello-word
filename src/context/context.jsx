/* eslint-disable no-undef */
import { Component, createContext } from "react"

// Provider
const RootContext = createContext();
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
  return (
    class ParentComp extends Component {
      state = {
        totalOrder: 0
      }
      dispatch = (action) => {
        if (action.type === 'PLUS_ORDER') {
          return this.setState({
            totalOrder: this.state.totalOrder + 1
          })
        }
        if (action.type === 'MINUS_ORDER' && this.state.totalOrder > 0) {
          return this.setState({
            totalOrder: this.state.totalOrder - 1
          })
        }
      }
      render() {
        return (
          <Provider value={{
            state: this.state,
            dispatch: this.dispatch
          }}>
            <Children {...this.props} />
          </Provider>
        )
      }
    }
  )
}



export default GlobalProvider;
// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return (
    class ParentConsumer extends Component {
      render() {
        return (
          <Consumer>
            {
              value => {
                return (
                  <Children {...this.props} {...value} />
                )
              }
            }
          </Consumer>
        )
      }
    }
  )
}