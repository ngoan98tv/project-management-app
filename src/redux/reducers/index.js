import { combineReducers } from "redux";
import authReducer from './auth';
import projectsReducer from './projects';
import tasksReducer from './tasks';

export default combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    tasks: tasksReducer
});