import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
const store = createStore(
  manageUsers
)

ReactDOM.render(
  // add imports and code
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);
