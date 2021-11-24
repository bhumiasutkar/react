import * as actions from './actionType';

let lastID = 0, itemId = 1;
const initialStateOne = {
    id: 0,
    description: '',
    resolved: false
};
const initialStateTwo = {
    itemId: 0,
    name: '',
    description: '',
    resolved: true
};

export const reducerOne = (state = initialStateOne, action) => {
    switch (action.type) {
        case actions.ADD:
            return {
                ...state,
                id: ++lastID,
                description: action.payload.description,
                resolved: false
            };
        case actions.REMOVE:
            return {
                // state.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;

    }
};

export const reducerTwo = (state = initialStateTwo, action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return {
                ...state,
                itemId: ++itemId,
                name: action.payload.name,
                description: action.payload.description,
                resolved: true
            };
        default:
            return state;

    }
};