import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import { Post } from '..'
import { getPosts } from '../../Redux/Actions/Posts'


export default function RecentPosts({ fetchLength }) {
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
            alignItems="center"
            justify='space-between'
            xs={7}
            style={{ margin: '0 auto' }}
        >
            {fetchedRecentPosts && fetchedRecentPosts.map((post, index)=>{
                    return(
                        <Grid item
                            lg={5}
                            md={5}
                            xs={10}
                            key={`${post}_${index}`}
                        >
                            <Post post={post} />
                        </Grid>
                    )
                })}
        </Grid>
    )
}
