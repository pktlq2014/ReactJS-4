import CartItem from './CartItem';
import Result from './Result';
import {connect} from 'react-redux';
import React, { Component } from 'react';
class CartList extends Component {
  render() {
    var data = this.props.cart;
    console.log(data);
    var productCart = data.map((values, index) => {
      return <CartItem
        name={values.name}
        price={values.price}
        image={values.image}
      />
    }); 
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productCart}
              <Result />
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart : state.cart
  }
}
export default connect(mapStateToProps, null)(CartList);
