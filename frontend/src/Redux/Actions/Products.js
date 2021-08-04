import * as api from '../../api'

// action creators
export const getProducts = ()=> async (dispatch) =>{
    try{
        const { data } = await api.fetchProducts()

        dispatch({ type: 'FETCH_ITEMS', payload: data })
    } catch(er){
        console.log(er)
    }
}