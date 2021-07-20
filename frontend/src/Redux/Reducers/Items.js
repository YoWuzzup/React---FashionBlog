const initialState = {
    items: [],
}

export const items = (items = initialState.items, action)=>{
    switch (action.type) {
        case 'FETCH_ITEMS':
            return action.payload
        default:
        return items
    }
}