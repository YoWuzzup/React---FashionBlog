import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../Redux/Actions/Posts'
import { Grid, makeStyles } from '@material-ui/core'
import { Post, PostSortingButtons } from '../'

const useStyles = makeStyles(theme =>({
    root:{
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 0 0 0',
        backgroundColor: '#f3f1ea'
    },
    postContainer:{
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]:{
            justifyContent: 'center'
        },
        [theme.breakpoints.down('xs')]:{
            margin: '0 0 20px'
        }
    },
}))

export default function BlogContent() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const fetchedPosts = useSelector( state=> state.posts )

    useEffect(() => {
        dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.root} >

            <PostSortingButtons />

            <Grid item container
                xs={11} 
                spacing={4}
                className={classes.postContainer}
            >
                {fetchedPosts && fetchedPosts.map((post, index)=>{
                    return(
                        <Grid item
                            lg={3}
                            md={6}
                            xs={10}
                            key={`${post}_${index}`}
                        >
                            <Post post={post} actionType={'LIKE_POST'} />
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}
