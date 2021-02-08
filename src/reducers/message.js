import * as messages from '../constants/Message';
import * as types from './../constants/ActionType';
var initialState = messages.MSG_WELCOME;
var message = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MESSAGE: {
            return state;
        }
        case types.CHANGE_MESSAGE: {
            state = action.message;
            return state;
        }        // khi state nhiều sp (nhiều obj trong array thì nên ...
        // để sau khi thay đổi 1 sp thì lấy ra những thằng còn lại)
        default: return [...state];
    }
}
export default message;