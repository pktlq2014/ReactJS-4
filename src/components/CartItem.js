import React, { Component } from 'react';
class CartItem extends Component {
  total = (price, quantity) => {
    return price * quantity;
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
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.total(this.props.price, this.props.quantity)}$</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
