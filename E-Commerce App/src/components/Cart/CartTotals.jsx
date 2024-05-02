import React, { Component } from 'react'

export class CartTotals extends Component {
  render() {
    const {
        cartSubTotal,
        cartTax,
        cartTotal,
        cart,
        clearCart
      } = this.props.value;
      const { history } = this.props;
      const emptyCart = cart.length === 0 ? true : false;
    return (
      <div>
        
      </div>
    )
  }
}

export default CartTotals
