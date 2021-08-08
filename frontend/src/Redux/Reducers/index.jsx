import { combineReducers } from "redux"

import { products } from './Products'
import { posts } from './Posts'
import { navigationButton, postSortingButton } from './Buttons'

export default combineReducers({
    products,
    posts,
    navigationButton,
    postSortingButton
})