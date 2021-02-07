import * as types from './../constants/ActionType';
export const showProduct = (product) => {
    return {
        type : types.SHOW_PRODUCT,
        product : product
    }
}