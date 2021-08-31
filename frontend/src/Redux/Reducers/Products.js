const initialState = {
    products: [],
    recentProducts: []
}

export const products = (products = initialState.products, action)=>{
    switch (action.type) {
        case 'FETCH_ITEMS':
            return action.payload
        default:
            return products
    }
}

export const recentProducts = (products = initialState.recentProducts, action)=>{
    switch (action.type) {
        case 'FETCH_RECENT_ITEMS':
            return action.payload
        default:
            return products
    }
}