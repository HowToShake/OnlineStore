import { createStore } from 'redux';
import { countReducer } from '../components/TopBar/reducer'

export const store = createStore(countReducer);