const initialState = {
    posts: [],
    recentPosts: []
}

export const posts = (posts = initialState.posts, action) =>{
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload          
        case 'LIKE_POST':
            return posts
                .map((post) => (post.id === action.payload._doc._id 
                            || post._id === action.payload._doc._id) 
                                    ? action.payload._doc : post);
        default:
            return posts
    }
}

export const recentPosts = (posts = initialState.recentPosts, action) =>{
    switch (action.type) {
        case 'FETCH_RECENT_POSTS':
            return action.payload          
        case 'LIKE_RECENT_POST':
            return posts.map((post) => (post.id === action.payload._doc._id || post._id === action.payload._doc._id) ? action.payload._doc : post);
        default:
            return posts
    }
}