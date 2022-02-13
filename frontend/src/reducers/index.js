import usersReducer from './usersReducer';
import statusReducer from './statusReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    usersReducer,
    statusReducer
});

export default allReducers;