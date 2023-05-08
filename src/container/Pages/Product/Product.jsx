import React, { Component, Fragment } from "react";
import logo from './shopping-cart.png';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';
// Redux
// import { connect } from "react-redux";
// Context API
import { RootContext } from "../../Home/Home";

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
    return (
      <RootContext.Consumer>
        {
          value => {
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
                    <div className="count">{value.state.totalOrder}</div>
                  </div>
                </div>
                <CardProduct />
              </Fragment>
            )
          }
        }
      </RootContext.Consumer>
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

export default Product;