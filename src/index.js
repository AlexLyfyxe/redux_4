import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './redux/reducer';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(rootReducer, applyMiddleware(thunk, logger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


