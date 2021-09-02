import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Edit from './Edit';
import Add from './Add';
import Store from './Store';
import {Provider} from 'react-redux';
import Login from "./Login";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <Router>
    <Route exact path='/add' exact component={Add}></Route>
    <Route exact path='/edit' component={Edit}></Route>
    <Route exact path='/' component={App}></Route>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

