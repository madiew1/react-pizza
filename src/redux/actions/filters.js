export const setSortBy = ({type, order}) => ({
    type: "SET_SORT_BY",
    payload: {type, order}
})

export const setCategory = (basketIndex) => ({
    type: "SET_CATEGRIES",
    payload: basketIndex
})
