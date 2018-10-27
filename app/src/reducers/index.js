import { combineReducers } from 'redux';
import title from './titleReducer';
import timer from './timerReducer';
import timeline from './timelineReducer';
export default combineReducers({
    title,
    timer,
    timeline
});