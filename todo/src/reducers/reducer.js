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
        case 'TOGGLE_ITEM':
            const completed = state.map(item =>{
                if(item.id === action.payload){
                    return {
                        ...item,
                        completed: !completed
                    };
                } else {
                    return item;
                };
            });
            return completed;
        default:
            return state;
    };
};