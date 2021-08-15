const initialState = {
    posts: [],
    singlePost: []
}

export const posts = (posts = initialState.posts, action) =>{
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return posts
    }
}

export const singlePost = (post = initialState.singlePost, action)=>{
    switch (action.type) {
        case "FETCH_SINGLE_POST":
            return action.payload            
        default:
            return post
    }
}