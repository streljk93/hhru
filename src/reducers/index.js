import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import vacancy from './vacancy';

export default combineReducers({
    routing: routerReducer,
    ui,
    vacancy,
});