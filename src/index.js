import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { addCharecterById } from './actions'

const store = createStore(rootReducer);
console.log('store.getstate()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharecterById(2));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

serviceWorker.unregister();
