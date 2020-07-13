import {v4 as uuid} from 'uuid';

export const initialState = [{
    task: 'Learn about reducers',
    completed: false,
    id: uuid()
}];

export const reducer = (state, action) =>{
    switch (action.type) {
        default:
            return state;
    };
};