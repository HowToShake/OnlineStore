
const initialItems = {
    items: [],
    loading: false,
    searchedItems: [],
}


export const itemReducer = (state = initialItems, action) => {
    switch (action.type){
        case "GET_ITEMS":
            return {
                ...state, 
                items: action.payload,
                loading: false,
            };
        

        case "ITEMS_LOADING":
            return{
                ...state,
                loading: true
            };

        case 'GET_SEARCHED_ITEMS':
            return{
                ...state,
                searchedItems: action.payload,
            }
            
        default:{
            return state
        }
        
    }
}
