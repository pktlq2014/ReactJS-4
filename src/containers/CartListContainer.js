import { connect } from 'react-redux';
import CartList from '../components/CartList';
import CartItem from '../components/CartItem';
import Result from './../components/Result';
import React, { Component } from 'react';
import * as messages from './../constants/Message';
//import PropTypes from 'prop-types';
class CartListContainer extends Component {
    sendCart = (cart) => {
        var result = messages.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((values, index) => {
                return <CartItem
                    key={values.id}
                    name={values.name}
                    price={values.price}
                    quantity={values.quantity}
                    image={values.image}
                />
            });
        }
        return result;
    }
    total = (cart) => {
        var total = 0;
        cart.forEach((values, index) => {
            total += values.price * values.quantity;
        });
        return <Result
            total={total}
        />
    }
    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <CartList>
                {this.sendCart(cart)}
                {this.total(cart)}
            </CartList>
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
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
