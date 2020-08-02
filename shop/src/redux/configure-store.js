import { createStore } from 'redux';
import combineReducers from './reducers/index'

export const store = createStore(combineReducers);