import React from 'react';
import Todo from './Todo';

const List = props =>{
    const {todos, clear, toggle} = props
    return (
        <div className='todo-list'>
            {todos.map(item =>(
                <Todo toggleItem={toggle} key={item.id} item={item}/>
            ))}
            <button onClick={clear}>Clear Completed</button>
        </div>
    )
}

export default List