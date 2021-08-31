import { combineReducers } from "redux"

import { products, recentProducts } from './Products'
import { posts, recentPosts } from './Posts'
import { navigationButton, postSortingButton } from './Buttons'

export default combineReducers({
    products,
    posts,
    navigationButton,
    postSortingButton,
    recentPosts,
    recentProducts
})