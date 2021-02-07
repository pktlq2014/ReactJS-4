import * as types from '../constants/ActionType'; 
var data = JSON.parse(localStorage.getItem("productCart"));
var productCart = [];
productCart.push(data);
var initialState = productCart ? productCart : [];
var cart = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW_CART: {
            return state;
        }
        // khi state nhiều sp (nhiều obj trong array thì nên ...
        // để sau khi thay đổi 1 sp thì lấy ra những thằng còn lại)
        default : return state;
    }
}
export default cart;