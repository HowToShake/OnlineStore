const initialItems = {
    items: [],
    loading: false,
    searchedItems: [],
    categories: [],
    musicInParticularCategory: [],
}

export const itemReducer = (state = initialItems, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload,
                loading: false,
            }

        case "ITEMS_LOADING":
            return {
                ...state,
                loading: true,
            }

        case "GET_SEARCHED_ITEMS":
            return {
                ...state,
                searchedItems: action.payload,
            }

        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.categories,
            }

        case "GET_MUSIC_IN_CATEGORY":
            return {
                ...state,
                musicInParticularCategory: action.payload,
                loading: false,
            }

        default: {
            return state
        }
    }
}
