import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import RegisterServiceWorker from './RegisterServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
RegisterServiceWorker();