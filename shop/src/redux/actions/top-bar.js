export const searchInput = searchValue =>{
    return{
        type: 'SEARCH',
        payload: searchValue,
    };
}