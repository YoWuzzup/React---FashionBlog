import { fetchPosts } from '../../api/index'

// action creators
export const getPosts = () => async (dispatch)=>{
    try {
        const { data } = await fetchPosts()

        dispatch({type: 'FETCH_POSTS', payload: data })
    } catch (er) {
        console.log(er)
    }
}