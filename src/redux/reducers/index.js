import { combineReducers } from "redux";
import authReducer from './authReducer';
import projectsReducer from './projectsReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    tasks: tasksReducer
});