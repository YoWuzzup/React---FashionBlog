import { fetchProducts } from '../../api/index'

// action creators
export const getProducts = ()=> async (dispatch) =>{
    try{
        const { data } = await fetchProducts()

        dispatch({ type: 'FETCH_ITEMS', payload: data })
    } catch(er){
        console.log(er)
    }
}