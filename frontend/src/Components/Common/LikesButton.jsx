import React from 'react'
import { useDispatch } from 'react-redux'
import { likePostAction } from '../../Redux/Actions/Posts'
import { Grid } from '@material-ui/core'
import { FavoriteBorder } from '@material-ui/icons'

export default function LikesButton({ postId, likes, likesStyles, actionType }) {
    const dispatch = useDispatch()

    const updatePostLikes = ()=>{
        dispatch(likePostAction(postId, actionType))
    }

    return (
        <Grid item container
            alignItems="center"
            xs={3}
            className={likesStyles}
            onClick={updatePostLikes}
        > 
            {likes}
            <FavoriteBorder style={{ fontSize: 20, color: 'red', margin: '0 0 0 7px'  }} />
        </Grid>
    )
}
