const initialState = {
    navigationButton: 'home',
    postSortingButton: 'All Posts'
}

export const navigationButton = (button = initialState.navigationButton, action) =>{
    switch (action.type) {
        case 'CHANGE_NAV_BUTTON':
            return action.payload
        default:
            return button
    }
}

export const postSortingButton = (button = initialState.postSortingButton, action)=>{
    switch (action.type) {
        case 'CHANGE_SORTING_POST_BUTTON':
            return action.payload
        default:
            return button
    }
}