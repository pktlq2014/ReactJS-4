import { connect } from 'react-redux';
import ProductList from './../components/ProductList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ProductListContainer extends Component {
    render() {
        var product = this.props.product;
        console.log(product);
        return (
            <ProductList
                product={product}
            />
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
