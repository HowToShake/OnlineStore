
const initialItems = {
    items: [],
    loading: false,
}


export const itemReducer = (state = initialItems, action) => {
    switch (action.type){
        case "GET_ITEMS":
            console.log('upload files')
            console.log(state);
            return {
                ...state, 
                items: action.payload,
                loading: false,
            };
        

        case "ITEMS_LOADING":
            return{
                ...state,
                loading: true
            }
            
        default:{
            return state
        }
        
    }
}
