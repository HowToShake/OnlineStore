import {v4 as uuidv4} from 'uuid'

const initialState = {
    id: "",
    order: [],
    userID: "",
    totalPrice: "",
    orderedItems: "",
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART":
            return {
                ...state,
                order: [...state.order, action.payload],
            }
        case "REMOVE_ITEM_FROM_CART":
            for (let i = 0; i < state.order.length; i++) {
                if (state.order[i] === action.payload) {
                    state.order.splice(i, 1)
                    break
                }
            }
            return {
                ...state,
                order: state.order,
            }
        case "CREATE_NEW_ORDER":
            return {
                ...state,
                id: uuidv4(),
                userID: action.userID,
            }
        case "CLEAR_USER_CART":
            return {
                id: "",
                order: [],
                userID: "",
            }
        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: action.totalPrice,
            }
        case "SET_ORDERED_ITEMS":
            return {
                ...state,
                orderedItems: action.orderedItems,
            }
        default:
            return state
    }
}
