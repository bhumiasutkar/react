import { actions } from "./actionType";
import { createTodoItem, getTodoItem, deleteTodoItem, editTodoItem, filterTodoItem } from "./services";

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
        getTodoItem().then((res) => { /// thunk
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

export const editTask = (id, item) => {
    return (dispath) => {
        editTodoItem(id, item).then((res) => {
            dispath({ type: actions.EDIT_TASK, payload: res.data });
        }).catch(err => console.log('edit error ', err));
    };
};
export const deleteTask = (id) => {
    return (dispatch) => {
        deleteTodoItem(id).then((res) => {
            dispatch({ type: actions.DELETE_TASK, payload: id });
        }).catch(err => console.log('edit error ', err));
    };
};

export const filterTask = (name) => {
    return { type: actions.FILTER_TASK, payload: name };
};
