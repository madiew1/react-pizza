const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
}

const filters = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGRIES':
            return {
                ...state,
                category: action.payload
            }
    }
    return state
}

export default filters;