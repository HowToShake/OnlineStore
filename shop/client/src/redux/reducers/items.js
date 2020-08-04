
const initialItems = {
    items: [],
}


export const itemReducer = (state = initialItems, action) => {
    switch (action.type){
        case 'UPLOAD_ITEMS':
            console.log('upload files')
            debugger;
            console.log(state);
            return {
                ...state, 
                items: action.items,
            };
        
        default:
            return state;
    }
}