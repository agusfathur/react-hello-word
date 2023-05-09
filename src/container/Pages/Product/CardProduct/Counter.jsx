
// import { connect } from "react-redux";
// import ActionType from "../../../../redux/reducer/globalActionType";

// Contex Api
import { GlobalConsumer } from "../../../../context/context";

const Counter = (props) => {
  // state = {
  //   order: 4
  // }

  // handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue)
  // }

  // handlePlus = () => {
  //   this.setState({
  //     order: this.state.order + 1
  //   }, () => {
  //     // lakukan function ini ketika value telah berubah
  //     this.handleCounterChange(this.state.order)
  //   });

  // }

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState({
  //       order: this.state.order - 1
  //     }, () => {
  //       // lakukan function ini ketika value telah berubah
  //       this.handleCounterChange(this.state.order)
  //     })
  //   }
  // }

  return (
    <div className="counter">
      <button className="minus" onClick={() => props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
      <input type="text" value={props.state.totalOrder} />
      <button className="plus" onClick={() => props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
    </div>
  )
}


// Redux State
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER })
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);