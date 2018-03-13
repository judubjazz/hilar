import React from 'react';
// import App from './App';
import App from './containers/App.js'
import {BrowserRouter} from 'react-router-dom'

import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers/Home/index'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
