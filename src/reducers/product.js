import * as types from './../constants/ActionType'; 
// var initialState = [
//     {
//         id : 1,
//         name : 'Iphone 1',
//         image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
//         description : 'Sản phẩm do Apple sản xuất',
//         price : 500,
//         inventory : 10,
//         rating: 3
//     }
// ]
var initialState = [];
var product = (state = initialState, action) => {
    switch(action.type) {
        case types.DATA_SERVER: {
            console.log(action);
            state = action.data;
            return [...state];
        }
        default : return [...state];
    }
}
export default product;