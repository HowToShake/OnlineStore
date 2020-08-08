import axios from 'axios'

export const uploadItems  = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:5000/api/items')
        .then((res) =>{
            dispatch({
                type: 'GET_ITEMS',
                payload: res.data
            })
        })
}

export const setItemsLoading = () => {
    return{
        type: 'ITEMS_LOADING'
    }
}