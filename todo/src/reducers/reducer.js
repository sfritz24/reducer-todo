export const initialState = [];

export const reducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_NEW_ITEM': 
            return [
                ...state,
                action.payload
            ];
        case 'TOGGLE_ITEM':
            const complete = state.map(item =>{
                if(item.id === action.payload){
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                };
            });
            return complete;
        case 'CLEAR_ITEMS':
            const completed = state.filter(item =>(item.completed === false));
            return completed;
        default:
            return state;
    };
};