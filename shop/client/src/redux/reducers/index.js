import { combineReducers } from 'redux'
import { itemReducer } from './items'
import { errorReducer } from './error'
import { authReducer } from './auth'
import { cartReducer } from './cart'
import { topBarReducer } from './topBar'

export default combineReducers({
    items: itemReducer ,
    error: errorReducer,
    auth: authReducer,
    cart: cartReducer,
    topBar: topBarReducer,
})