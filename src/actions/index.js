import * as types from './../constants/ActionType';
import * as messages from './../constants/Message';
export const showProduct = (product) => {
    return {
        type : types.SHOW_PRODUCT,
        product : product
    }
}
export const addToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product : product,
        quantity : quantity
    }
}
export const showCart = () => {
    return {
        type : types.SHOW_CART
    }
}
export const message = () => {
    return {
        type : types.SHOW_MESSAGE
    }
}
export const changeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message : message
    }
} 