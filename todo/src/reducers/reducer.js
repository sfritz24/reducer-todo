import {v4 as uuid} from 'uuid';

export const initialState = [{
    task: 'Learn about reducers',
    completed: false,
    id: uuid()
}];

export const reducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_NEW_ITEM': 
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    };
};