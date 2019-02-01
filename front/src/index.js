/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import allReducers from './reducers';

// Function to create localStorage item named 'state' that contains redux state
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

// Function to retrieve state from the localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined
    } else {
      return JSON.parse(serializedState)
    }
  } catch (e) {
    console.log(e);
    return undefined
  }
};

// Include the data retrieved from localStorage in redux store
const store = createStore(allReducers, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
