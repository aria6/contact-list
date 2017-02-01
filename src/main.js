// @flow
import React from 'react';
import {render} from 'react-dom';
import App from './App';

let container = document.createElement('div');

if (document.body != null) {
  document.body.appendChild(container);
}

let dataStore = createDataStore(initialState, () => {
  update();
});

function update() {
  render(<App dataStore={dataStore} />, container);
}

update();
