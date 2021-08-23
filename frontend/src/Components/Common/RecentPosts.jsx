import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import { Post } from '..'
import { getPosts } from '../../Redux/Actions/Posts'

export default function RecentPosts({ fetchLength, rootStyle, page }) {
    const dispatch = useDispatch()
    const fetchedRecentPosts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPosts(fetchLength))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid
            container item
            direction="row"
            alignItems='center'
            justify={page === 'main' ? "center" : 'space-between'}
            spacing={5}
            md={7}
            xs={10}
            style={{ rootStyle }}
        >
            {fetchedRecentPosts && fetchedRecentPosts.map((post, index)=>{
                    return(
                        <Grid item
                            lg={fetchedRecentPosts.length > 2 ? 4 : 5}
                            md={10}
                            xs={12}
                            key={`${post}_${index}`}
                        >
                            <Post post={post} page={page} />
                        </Grid>
                    )
                })}
        </Grid>
    )
}
