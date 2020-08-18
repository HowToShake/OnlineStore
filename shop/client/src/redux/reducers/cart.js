
const MAX = 99999999999999999;
const MIN = 10000000000000000;

const initialState = {
    id: '',
    order: [],
    userID: '',
}

export const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                order: [...state.order, action.payload]
            }
        case 'CREATE_NEW_ORDER':
            return{
                ...state,
                id: Math.floor(Math.random() * (MAX - MIN + 1)+MIN),
                userID: action.userID,
            }

        default: 
            return state;
    }

}