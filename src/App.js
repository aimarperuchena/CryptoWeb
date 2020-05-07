import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './routes';

//Redux
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
