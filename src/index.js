import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
ReactDOM.render(
  <React.StrictMode>
    <Navbar title="TODO-REDUX" />
    <Provider store={createStore(reducers)}>
      <Form />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


