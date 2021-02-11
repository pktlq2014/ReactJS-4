import * as types from './../constants/ActionType';
import * as messages from './../constants/Message';
import API from './../utils/API';
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
export const deleteCart = (id) => {
    return {
        type : types.DELETE_CART,
        id : id
    }
}
export const increaseCart = (data, id, index) => {
    return {
        type : types.INCREASE_CART,
        data : data,
        id : id,
        index : index
    }
}
export const decreaseCart = (data, id, index) => {
    return {
        type : types.DECREASE_CART,
        data : data,
        id : id,
        index : index
    }
}
// hiển thị data từ server
export const dataServerRequest = () => {
    return (dispatch) => {
        // thời gian lấy dữ liệu từ server về lâu hơn thời gian lấy dữ liệu 
        // rồi truyền vào dispatch, nên sinh ra lỗi middleware
        // hay nói cách khác là khi truyền dữ liệu từ server vào dispatch nhanh quá
        // lúc này chưa có dữ liệu để truyền vào dispatch
        // middleware là lớp nằm giữa reducers và dispatch actions
        // giúp fetch dữ liệu xong mới dispatch actions
        return API('product', 'GET', null).then(res => {
            dispatch(dataServer(res.data));
        });
    }
}
export const dataServer = (data) => {
    return {
        type : types.DATA_SERVER,
        data : data
    }
}
// xóa data server từ UI
export const deleteProductRequest = (id) => {
    return (dispatch) => {
        // thời gian lấy dữ liệu từ server về lâu hơn thời gian lấy dữ liệu 
        // rồi truyền vào dispatch, nên sinh ra lỗi middleware
        // hay nói cách khác là khi truyền dữ liệu từ server vào dispatch nhanh quá
        // lúc này chưa có dữ liệu để truyền vào dispatch
        // middleware là lớp nằm giữa reducers và dispatch actions
        // giúp fetch dữ liệu xong mới dispatch actions
        return API(`product/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteProduct(res.data));
        });
    }
}
export const deleteProduct = (id) => {
    return {
        type : types.DELETE_DATA_SERVER,
        id : id
    }
}
// thêm data server từ UI
export const addProductRequest = (product) => {
    return (dispatch) => {
        // thời gian lấy dữ liệu từ server về lâu hơn thời gian lấy dữ liệu 
        // rồi truyền vào dispatch, nên sinh ra lỗi middleware
        // hay nói cách khác là khi truyền dữ liệu từ server vào dispatch nhanh quá
        // lúc này chưa có dữ liệu để truyền vào dispatch
        // middleware là lớp nằm giữa reducers và dispatch actions
        // giúp fetch dữ liệu xong mới dispatch actions
        return API('product', 'POST', product).then(res => {
            dispatch(addProduct(res.data));
        });
    }
}
export const addProduct = (id) => {
    return {
        type : types.ADD_DATA_SERVER,
        id : id
    }
}
// update data server từ UI
export const updateProductRequest = (product) => {
    return (dispatch) => {
        // thời gian lấy dữ liệu từ server về lâu hơn thời gian lấy dữ liệu 
        // rồi truyền vào dispatch, nên sinh ra lỗi middleware
        // hay nói cách khác là khi truyền dữ liệu từ server vào dispatch nhanh quá
        // lúc này chưa có dữ liệu để truyền vào dispatch
        // middleware là lớp nằm giữa reducers và dispatch actions
        // giúp fetch dữ liệu xong mới dispatch actions
        return API(`product/${product.id}`, 'PUT', product).then(res => {
            dispatch(updateProduct(res.data));
        });
    }
}
export const updateProduct = (product) => {
    return {
        type : types.UPDATE_DATA_SERVER,
        product : product
    }
}