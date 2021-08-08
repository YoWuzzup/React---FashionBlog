export const changeNavButton = (button) => async (dispatch) => {
    dispatch({type: 'CHANGE_NAV_BUTTON', payload: button })
}

export const changePostSortingButton = (button) => dispatch =>{
    let btnName = button.toLowerCase().split(' ').join('')
    dispatch({ type: 'CHANGE_SORTING_POST_BUTTON', payload: btnName })
}