import React from 'react';

const Header = props =>{
    return (
        <div className='Header'>
            <h1>Honey Do List:</h1>
            <form>
                <input
                    type='text'
                    name='item'
                />
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default Header