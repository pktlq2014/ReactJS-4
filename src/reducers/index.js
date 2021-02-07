import {combineReducers} from 'redux';
import product from './product';
import cart from './cart';
var reducers = combineReducers({
    product : product,
    cart : cart
});
export default reducers;