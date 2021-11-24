import * as actions from './actionType';

export const itemAdd = (description) => {
    return {
        type: actions.ADD,
        payload: {
            description: description
        }
    };
};

export const itemRemove = (id) => {
    return {
        type: actions.REMOVE,
        id: id
    };
};

export const addItemTwo = (name, description) => {
    return {
        type: actions.ADD_ITEM,
        payload: {
            name: name,
            description
        }
    };
};