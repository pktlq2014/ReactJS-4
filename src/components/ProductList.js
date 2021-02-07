import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import React, { Component } from 'react';
class ProductList extends Component {
  render() {
    var { product } = this.props;
    console.log(product);
    var products = product.map((values, index) => {
      return <ProductItem
        key={values.id}
        id={values.id}
        image={values.image}
        inventory={values.inventory}
        name={values.name}
        price={values.price}
        description={values.description}
        index={index}
        rating={values.rating}
      />
    });
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {products}
        </div>
      </section>


    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
