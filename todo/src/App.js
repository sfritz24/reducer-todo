import React, {useState, useReducer} from 'react';
import './App.css';
import {initialState, reducer} from './reducers/reducer';
import Header from './components/Header';
import List from './components/List';
import {v4 as uuid} from 'uuid';

function App() {
  const [newTask, setNewTask] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  const addItem = itemName =>{
    const newItem = {
      task: itemName,
      completed: false,
      id: uuid()
    };
    dispatch({type: 'ADD_NEW_ITEM', payload: newItem});
  };

  const handleChanges = event =>{
    setNewTask(event.target.value);
  };

  const handleSubmit = event =>{
    event.preventDefault();
    addItem(newTask);
    setNewTask('');
  };

  const toggleItem = itemId =>{
    dispatch({type: 'TOGGLE_ITEM', payload: itemId});
  };

  const clearCompleted = () =>{
    dispatch({type: 'CLEAR_ITEMS'});
  };

  return (
    <div className="App">
      <Header change={handleChanges} submit={handleSubmit} task={newTask}/>
      <List todos={state} clear={clearCompleted} toggle={toggleItem}/>
    </div>
  );
}

export default App;
