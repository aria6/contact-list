// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createDataStore from './helpers/createDataStore';
import initialState from './db/initialState';

let container = document.createElement('div');

if (document.body != null) {
  document.body.appendChild(container);
}

let dataStore = createDataStore(initialState, () => {
  render();
});

function render() {
  ReactDOM.render(<App dataStore={dataStore} />, container);
}

render();
