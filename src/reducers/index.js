import {combineReducers} from 'redux';
import product from './product';
var reducers = combineReducers({
    product : product
});
export default reducers;