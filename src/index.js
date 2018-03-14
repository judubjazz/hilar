import React from 'react';
import {App} from './App';


import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootreducer from './reducers'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    rootreducer,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
