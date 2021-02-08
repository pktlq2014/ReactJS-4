import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem("productCart"));
var initialState = [
    {
        id: 1,
        name: 'Iphone 1',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5,
        quantity: 3
    },
    {
        id: 2,
        name: 'Iphone 2',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 3,
        quantity: 5
    }
]
var cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            return [...state];
        }
        // khi state nhiều sp (nhiều obj trong array thì nên ...
        // để sau khi thay đổi 1 sp thì lấy ra những thằng còn lại)
        default: return [...state];
    }
}
export default cart;