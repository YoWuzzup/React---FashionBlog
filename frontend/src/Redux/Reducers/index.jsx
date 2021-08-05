import { combineReducers } from "redux"

import { products } from './Products'
import { posts } from './Posts'

export default combineReducers({
    products,
    posts
})