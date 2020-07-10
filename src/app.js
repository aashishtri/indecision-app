import React from 'react';
import ReactDOM from 'react-dom';
import Option from './components/Option';
import IndecisionApp from './components/IndecisionApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'));
