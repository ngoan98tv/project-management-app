import axios from 'axios';

export const AuthAPI = {
    login: '',
    logout: '',
    getProfile: ''
};

export const ProjectAPI = {
    getProjects: '',
    getProject: '',
    addProject: '',
    delProject: '',
    updateProject: ''
};

export const TaskAPI = {
    getTasks: '',
    getTask: '',
    addTask: '',
    delTask: '',
    updateTask: ''
};

export default (getState) => axios.create({
    baseURL: 'localhost:8000',
    headers: {
        'Authorization': `Token ${getState().auth.token}`
    }
})