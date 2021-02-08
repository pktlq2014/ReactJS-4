import { connect } from 'react-redux';
import CartList from '../components/CartList';
import CartItem from '../components/CartItem';
import * as actions from './../actions/index';
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
                    id={values.id}
                    index={index}
                    name={values.name}
                    onChangeMessage={this.props.onChangeMessage}
                    price={values.price}
                    quantity={values.quantity}
                    image={values.image}
                    onDeleteCart={this.props.onDeleteCart}
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
        onDeleteCart : (id) => {
            dispatch(actions.deleteCart(id));
        },
        onChangeMessage : (message) => {
            dispatch(actions.changeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
