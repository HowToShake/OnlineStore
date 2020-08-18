import { combineReducers } from 'redux'
import { topBarReducer } from './top-bar'
import { itemReducer } from './items'
import { errorReducer } from './error'
import { authReducer } from './auth'
import { cartReducer } from './cart'

export default combineReducers({
    topBar: topBarReducer ,
    items: itemReducer ,
    error: errorReducer,
    auth: authReducer,
    cart: cartReducer
})