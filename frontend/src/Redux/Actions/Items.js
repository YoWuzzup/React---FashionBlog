import * as api from '../../api'

// action creators
export const getItems = ()=> async (dispatch) =>{
    try{
        const { data } = await api.fetchItems()

        dispatch({ type: 'FETCH_ITEMS', payload: data })
    } catch(er){
        console.log(er)
    }
}