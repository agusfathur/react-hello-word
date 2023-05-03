import React, { Component, Fragment } from "react";
import './Product.css';
import logo from './shopping-cart.png';
import CardProduct from "../CardProduct/CardProduct";
class Product extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <h2 className="logo-text">Etanee</h2>
          </div>
          <div className="troley">
            <img src={logo} alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    )
  }
};


export default Product;