import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import { Post } from '..'
import { getRecentPosts } from '../../Redux/Actions/Posts'

export default function RecentPosts({ fetchLength, page }) {
    const dispatch = useDispatch()
    const fetchedRecentPosts = useSelector(state => state.recentPosts)

    useEffect(() => {
        dispatch(getRecentPosts(fetchLength))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid
            container item
            direction="row"
            alignItems='flex-start'
            justify={page === 'main' ? "center" : 'space-between'}
            spacing={3}
            md={7}
            xs={10}
        >
            {fetchedRecentPosts && fetchedRecentPosts.map((post, index)=>{
                    return(
                        <Grid item
                            lg={fetchedRecentPosts.length > 2 ? 4 : 5}
                            md={10}
                            xs={12}
                            key={`${post}_${index}`}
                        >
                            <Post post={post} page={page} actionType={'LIKE_RECENT_POST'} />
                        </Grid>
                    )
                })}
        </Grid>
    )
}
