import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem("productCart"));
var initialState = data ? data : [];
var cart = (state = initialState, action) => {
    var { product } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART: {
            console.log(action.product.id);
            //console.log(state);
            index = findCart(state, product);
            // index === -1 vừa là lần đầu tiên (giỏ hàng đang rỗng)
            // vừa là sp mới khác với các sp đã tồn tại trong giỏ hàng
            if (index === -1) {
                product.quantity = action.quantity;
                console.log(product);
                state.push(product);
                console.log(state);
            }
            else {
                state[index].quantity += 1;
            }
            localStorage.setItem("productCart", JSON.stringify(state));
            return [...state];
        }
        case types.DELETE_CART: {
            // console.log(action);
            // state.forEach((values, index) => {
            //     if(values.id === action.id) {
            //         state.splice(action.id, 1);
            //     }
            // });
            console.log(action);
            state.splice(action.id, 1);
            localStorage.setItem("productCart", JSON.stringify(state));
            return [...state];
        }
        // khi state nhiều sp (nhiều obj trong array thì nên ...
        // để sau khi thay đổi 1 sp thì lấy ra những thằng còn lại)
        default: return [...state];
    }
}
var findCart = (state, product) => {
    var index = -1;
    if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;