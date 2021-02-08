import React, { Component } from 'react';
import * as messages from './../constants/Message';
class CartItem extends Component {
  total = (price, quantity) => {
    return price * quantity;
  }
  deleteCart = () => {
    var id = this.props.index;
    this.props.onDeleteCart(id);
    this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  onDecreaseCart = (data, id, index) => {
    this.props.onDecreaseCart(data, id, index);
    this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
  }
  onIncreaseCart = (data, id, index) => {
    this.props.onIncreaseCart(data, id, index);
    this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
  }
  render() {
    return (
      <tr>
        <th scope="row">
          <img src={this.props.image} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{this.props.name}</strong>
          </h5>
        </td>
        <td>{this.props.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{this.props.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={() => this.onDecreaseCart(-1, this.props.id, this.props.index)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label onClick={() => this.onIncreaseCart(1, this.props.id, this.props.index)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.total(this.props.price, this.props.quantity)}$</td>
        <td>
          <button type="button"
          onClick={this.deleteCart}
          className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
