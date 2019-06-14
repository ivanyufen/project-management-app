import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux'; //function untuk combine reducer kita jadi satu.

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;