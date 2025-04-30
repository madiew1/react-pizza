export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    fetch(`http://localhost:3000/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
         sortBy.type
       }&_order=${sortBy.order}`)
          .then((data) => data.json())
          .then((json) => dispatch(setPizzas(json)))
          .catch((err) => {
            console.warn(err)
            alert('Something went wrong')
          })
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
})

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload
})