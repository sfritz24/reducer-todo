import React, {useState, useReducer} from 'react';
import './App.css';
import {initialState, reducer} from './reducers/reducer';
import Header from './components/Header';
import List from './components/List';
import {v4 as uuid} from 'uuid';

function App() {
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

  return (
    <div className="App">
      <Header/>
      <List todos={state}/>
    </div>
  );
}

export default App;
