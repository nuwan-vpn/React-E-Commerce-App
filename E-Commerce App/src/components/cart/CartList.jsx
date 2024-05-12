import React, { Component } from 'react'

export class CartList extends Component {
  render() {
    return (
        const { value } = this.props;
        const { cart } = this.props.value;
        return (
          <div className="container-fluid">
            {cart.map(item => (
              <CartItem key={item.id} item={item} value={value} />
            ))}
          </div>
    )
  }
}

export default CartList
