import { fetchPosts, fetchSinglePost } from '../../api/index'

// action creators
export const getPosts = (fetchLength) => async (dispatch)=>{
    try {
        const { data } = fetchLength ? await fetchPosts(fetchLength) : await fetchPosts()

        dispatch({type: 'FETCH_POSTS', payload: data })
    } catch (er) {
        console.log(er)
    }
}

export const getSinglePost = (id) => async (dispatch)=>{
    try {
        const { data } = await fetchSinglePost(id)

        dispatch({type: 'FETCH_SINGLE_POST', payload: data })
    } catch (er) {
        console.log(er)
    }
}