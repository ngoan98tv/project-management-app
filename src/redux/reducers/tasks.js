import { tasksActionTypes } from "../types";
import States from '../initialStates';

export default (state = States.tasks, action) => {
    switch (action.type) {
        case tasksActionTypes.TASKS_ADD_FAIL:
            return state;
        default: return state;
    }
}