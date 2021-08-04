const initialState = {
    products: [],
}

export const products = (products = initialState.products, action)=>{
    switch (action.type) {
        case 'FETCH_ITEMS':
            return action.payload
        default:
        return products
    }
}