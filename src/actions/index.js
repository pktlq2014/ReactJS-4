import * as types from './../constants/ActionType';
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