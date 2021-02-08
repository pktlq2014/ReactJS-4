import { connect } from 'react-redux';
import ProductList from './../components/ProductList';
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import ProductItem from '../components/ProductItem';
class ProductListContainer extends Component {
    sendProduct = (product) => {
        var result = null;
        if (product.length > 0) {
            result = product.map((values, index) => {
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
        }
        return result;
    }
    render() {
        var { product } = this.props;
        console.log(product);
        return (
            <ProductList>
                {this.sendProduct(product)}
            </ProductList>
        );
    }
}
// ProductListContainer.propTypes = {
//     // product phải là array
//     product : PropTypes.arrayOf(
//         // bên trong array phải là object
//         PropTypes.shape({

//         })
//     ).isRequired
// }
const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
