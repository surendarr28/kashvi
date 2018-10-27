
import { TYPES } from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case TYPES.TIMELINE_LIST:
            return { ...state, "list": action.payload };
        default:
            return state
    }
}
