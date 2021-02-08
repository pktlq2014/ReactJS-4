import * as types from './../constants/ActionType'; 
var initialState = [
    {
        id : 1,
        name : 'Iphone 1',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 3
    },
    {
        id : 2,
        name : 'Iphone 2',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 4
    },
    {
        id : 3,
        name : 'Iphone 3',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 5
    },
    {
        id : 4,
        name : 'Iphone 4',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 1
    },
    {
        id : 5,
        name : 'Iphone 5',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 2
    },
    {
        id : 6,
        name : 'Iphone 6',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 3
    },
    {
        id : 7,
        name : 'Iphone 7',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 4
    },
    {
        id : 8,
        name : 'Iphone 8',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 5
    },
    {
        id : 9,
        name : 'Iphone 9',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 1
    }
]
var product = (state = initialState, action) => {
    switch(action.type) {
        // case types.ADD_TO_CART: {
        //     console.log(action);
        //     state.forEach((values, index) => {
        //         if(values.id === action.id) {
        //             console.log(values);
        //             localStorage.setItem("productCart", JSON.stringify(values));
        //         }
        //     });
        //     return state;
        // }
        // khi state nhiều sp (nhiều obj trong array thì nên ...
        // để sau khi thay đổi 1 sp thì lấy ra những thằng còn lại)
        default : return [...state];
    }
}
export default product;