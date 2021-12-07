import { actions } from "./actionType";

const initialUser = {
    user: []
};

export const UserReducer = (state = initialUser, action) => {
    switch (action.type) {
        case actions.SET_USER:
            state = {
                user: [...state.user, action.payload]
            };
            return state;
        default:
            return state;
    }
};

/*----------- Thunk -----------*/
const initialData = {
    tasks: []
};

export const TodoReducer = (state = initialData, action) => {
    switch (action.type) {
        case actions.GET_TASK:
            return { ...state, tasks: action.payload };

        case actions.EDIT_TASK:
            return { ...state };

        case actions.CREATE_TASK:
            const task = {
                id: Math.random(),
                assiggnedTo: action.payload.assiggnedTo,
                taskName: action.payload.taskName,
                taskStatus: action.payload.taskStatus
            };
            const tasks = [...state.tasks];
            tasks.push(task);
            return {
                ...state,
                tasks
            };
        case actions.DELETE_TASK:

            const tasksList = [...state.List];
            const taskIndex = tasksList.findIndex(
                (task) => task.id === actions.payload
            );
            tasksList.splice(taskIndex, 1);

            return { ...state, tasks };

        case actions.FILTER_TASK:
            const Items = [...state.tasks];
            const filtered = Items.filter(el => el.assiggnedTo.toLowerCase().indexOf(action.payload) !== -1);
            return {
                ...state,
                tasks: filtered
            };
        default:
            return state;
    }
};