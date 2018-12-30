import {combineReducers, compose as origCompose, createStore} from 'redux';
import {lazyReducerEnhancer} from 'pwa-helpers/lazy-reducer-enhancer';
import {connectRouter} from 'lit-redux-router';

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;
export const store = createStore(
    (state, action) => state, compose(lazyReducerEnhancer(combineReducers)),
);

connectRouter(store);
