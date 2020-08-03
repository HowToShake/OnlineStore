import {combineReducers} from 'redux'
import {topBarReducer} from './top-bar'

export default combineReducers({
    topBar: topBarReducer,
})