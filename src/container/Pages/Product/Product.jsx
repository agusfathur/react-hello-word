import React, { Component, Fragment } from "react";
import logo from './shopping-cart.png';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';
// Redux
// import { connect } from "react-redux";
// Context API
import { GlobalConsumer } from "../../../context/context";

class Product extends Component {
  // state = {
  //   order: 4
  // }

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue
  //   })
  // }

  render() {
    // console.log(this);
    return (
      <Fragment>
        <p>Halaman Product</p>
        <hr />
        <div className="header">
          <div className="logo">
            <h2 className="logo-text">Etanee</h2>
          </div>
          <div className="troley">
            <img src={logo} alt="" />
            <div className="count">{this.props.state.totalOrder}</div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    )
  }
};
// Redux
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder
//   }
// }
// export default connect(mapStateToProps)(Product);

export default GlobalConsumer(Product);