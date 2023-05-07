import React, { Component } from "react";
import Counter from "./Counter";


class CardProduct extends Component {

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://source.unsplash.com/480x500?laptop" alt="" />
          <p className="product-title">Laptop Gaming RGB</p>
          <p className="product-price">Rp. 400.000</p>
          <Counter />
        </div>
      </div>
    )
  }
}

export default CardProduct;