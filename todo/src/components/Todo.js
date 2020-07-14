import React from 'react';

const Todo = props =>{
    const{toggleItem, item} = props
    return (
        <div onClick={() => toggleItem(item.id)} className={`item ${item.completed ? 'completed' : ''}`}>
            <p className='listItem'>{item.task}</p>
        </div>
    )
}

export default Todo