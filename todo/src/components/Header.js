import React from 'react';

const Header = props =>{
    const {change, submit, task} = props
    return (
        <div className='Header'>
            <h1>Honey Do List:</h1>
            <form onSubmit={submit}>
                <input
                    type='text'
                    name='item'
                    value={task}
                    onChange={change}
                />
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default Header