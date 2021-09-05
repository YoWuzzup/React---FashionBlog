import { getPosts } from '../../Redux/Actions/Posts'

export const changeNavButton = (button) => async (dispatch) => {
    dispatch({type: 'CHANGE_NAV_BUTTON', payload: button })
}

export const changePostSortingButton = (button) => dispatch =>{
    let sorting = button.toLowerCase().split(' ').join('')
    
    dispatch({ type: 'CHANGE_SORTING_POST_BUTTON', payload: sorting })
    dispatch(getPosts(sorting))
}