import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import rootReducer from './reducers';
import App from './App';

import uikitcss from 'uikit/dist/css/uikit-rtl.min.css'
import ukitjs from 'uikit/dist/js/uikit'
import uikiticonsjs from 'uikit/dist/js/uikit-icons'
import fonts from "vazir-font/dist/font-face.css";
import styles from './styles.css'


const store = createStore(
    rootReducer,
    // promise middleware
    applyMiddleware(loadingBarMiddleware())
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
