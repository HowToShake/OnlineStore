import axios from 'axios'

export const uploadItems  = () => dispatch => {
    debugger;
    axios.get('/api/items')
        .then((res) =>{
            dispatch({
                type: 'UPLOAD_ITEMS',
                items: res.data
            })
        })
}