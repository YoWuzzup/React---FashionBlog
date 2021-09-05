import { fetchPosts, likePost, fetchSinglePost } from '../../api/index'

// action creators
export const getPosts = (sorting) => async (dispatch)=>{
    try {
        // crutch
        let _ = null
        const { data } = sorting ? await fetchPosts(_, sorting) : await fetchPosts()

        dispatch({type: 'FETCH_POSTS', payload: data })
    } catch (er) {
        console.log(er)
    }
}

export const getRecentPosts = (fetchLength) => async (dispatch)=>{
    try {
        const { data } = fetchLength ? await fetchPosts(fetchLength) : await fetchPosts()

        dispatch({type: 'FETCH_RECENT_POSTS', payload: data })
    } catch (er) {
        console.log(er)
    }
}

export const likePostAction = (id, actionType) => async (dispatch) =>{
    try {
        await likePost(id)
        const { data } = await fetchSinglePost(id)

        dispatch({ type: actionType, payload: data })
    } catch (error) {
        console.log(error);
    }
}