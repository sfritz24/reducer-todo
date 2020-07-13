import React from 'react';
import Todo from './Todo';

const List = props =>{
    return (
        <div className='todo-list'>
            {props.todos.map(item =>(
                <Todo key={item.id} item={item}/>
            ))}
            <button>Clear Completed</button>
        </div>
    )
}

export default List