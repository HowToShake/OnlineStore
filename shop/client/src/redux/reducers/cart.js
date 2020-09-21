const initialState = {
    id: "",
    order: [],
    userID: "",
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
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
                userID: action.userID,
            }
        case "CLEAR_USER_CART":
            return {
                id: "",
                order: [],
                userID: "",
            }

        default:
            return state
    }
}
