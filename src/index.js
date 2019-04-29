import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import store from "./store/index";

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

