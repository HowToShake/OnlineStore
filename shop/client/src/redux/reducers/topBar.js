
const initialState = {
    wasHomeOrMenuPressed: false,
}

export const topBarReducer = (state = initialState, action) => {
    switch(action.type){
        case 'RESTORE_MAIN_LAYOUT':{
            return{
                ...state,
                wasHomeOrMenuPressed: true,
            }
        }
        
        case 'CHANGE_LAYOUT': {
            return{
                ...state,
                wasHomeOrMenuPressed: false,
            }
        }

        default: 
            return state
    }

}