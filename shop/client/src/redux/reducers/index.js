import {combineReducers} from 'redux'
import {topBarReducer} from './top-bar'
import {itemReducer} from './items'

export default combineReducers({
    topBar: topBarReducer ,
    items: itemReducer ,
})