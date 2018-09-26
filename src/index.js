import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import uikitcss from 'uikit/dist/css/uikit-rtl.min.css'
import ukitjs from 'uikit/dist/js/uikit'
import uikiticonsjs from 'uikit/dist/js/uikit-icons'
import fonts from "vazir-font/dist/font-face.css";
import styles from './styles.css'
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
