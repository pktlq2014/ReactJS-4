import * as types from './../constants/ActionType';
export const showProduct = (product) => {
    return {
        type : types.SHOW_PRODUCT,
        product : product
    }
}
export const addToCart = (id) => {
    return {
        type : types.ADD_TO_CART,
        id : id
    }
}
export const showCart = () => {
    return {
        type : types.SHOW_CART
    }
}