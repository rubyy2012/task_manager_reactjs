import { combineReducers } from 'redux';
import UserReducer from './users/UserReducer';
const rootReducer = combineReducers({
    user: UserReducer,
});

export default rootReducer;
