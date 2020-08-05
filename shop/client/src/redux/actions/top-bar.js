export const search = value =>{
    return{
        type: 'SEARCH',
        searchValue: value,
    };
}