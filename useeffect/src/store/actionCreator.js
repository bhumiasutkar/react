import { actions } from "./actionType";
import { createTodoItem, getTodoItem } from "./services";

export const addUser = (name, description) => {
    return {
        type: actions.ADD_Task,
        payload: {
            name,
            description
        }
    };
};

export const deleteUser = (id) => {
    return {
        type: actions.Remove_Task,
        id
    };
};

export const editUser = (id, name, description) => {
    return {
        type: actions.UPDATE_Task,
        payload: {
            id,
            name,
            description
        }
    };
};

export const getUser = (data) => {
    return {
        type: actions.GET_USER,
        payload: data
    };
};

export const setUser = (data) => {
    return {
        type: actions.SET_USER,
        payload: data
    };
};

/*-----------todo using Thunk -----------*/
export const getTask = () => {
    return (dispatch) => {
        getTodoItem().then((res) => {
            dispatch({ type: actions.GET_TASK, payload: res.data });
        });
    };
};

export const createTask = (userTask) => {
    return (dispatch) => {
        createTodoItem(userTask).then((response) => {
            dispatch({ type: actions.CREATE_TASK, payload: response.data });
        }).catch((err) => {
            console.log(err);
        });
    };
};

export const editTask = () => {
    return (dispath) => {

    };
};
export const deleteTask = (id) => {
    return {
        type: actions.DELETE_TASK,
        payload: id
    };
};