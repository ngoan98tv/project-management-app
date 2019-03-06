import { projectsActionTypes } from "../types";
import States from "../initialStates";

export default (state = States.projects, action) => {
    switch (action.type) {
        case projectsActionTypes.PROJECTS_ADD_FAIL:
            return state;
        default: return state;
    }
}