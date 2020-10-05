export const createUserCart = (userID) => {
    return {
        type: "CREATE_NEW_ORDER",
        userID,
    }
}

export const addItemToCart = (selectedItem) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: selectedItem,
    }
}

export const removeItemFromCart = (selectedItem) => {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: selectedItem,
    }
}

export const clearUserCart = () => {
    return {
        type: "CLEAR_USER_CART",
    }
}

export const setTotalUserPrice = (totalPrice) => {
    return {
        type: "SET_TOTAL_PRICE",
        totalPrice,
    }
}

export const setOrderedItems = (orderedItems) => {
    return {
        type: "SET_ORDERED_ITEMS",
        orderedItems,
    }
}
