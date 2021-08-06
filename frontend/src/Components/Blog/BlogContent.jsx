import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../Redux/Actions/Posts'
import { Button, Grid, makeStyles } from '@material-ui/core'
import { LogInButton, Post } from '../'

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
    buttonPanel:{

    },
    buttons: {
        fontSize: '18px',
        textTransform: 'capitalize',
        margin: '0 40px 20px 0',
        padding: '0',
        '&:hover, &:focus':{
            color: 'rgb(124, 100, 14)',
            backgroundColor: 'inherit',
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            margin: '0 0 20px'
        },
        [theme.breakpoints.down('md')]:{
            justifyContent: 'center',
            textAlign: 'center'
        }
    },
    activeButtons:{
        color: 'rgb(124, 100, 14)',
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
    buttonsContainer:{
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]:{
            justifyContent: 'center',
        },
        [theme.breakpoints.down('xs')]:{
            flexFlow: 'column'
        }
    },
    sortingButtons:{
        [theme.breakpoints.down('md')]:{
            justifyContent: 'center',
            textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]:{
            flexFlow: 'column',
        }
    }
}))

const buttonArray = [{text: 'All Posts'}, {text: 'Fashion'}, {text: 'Beauty'}, {text: 'Home'}]

export default function BlogContent() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [activeSort, setActiveSort] = React.useState('All Posts')
    const fetchedPosts = useSelector( state=> state.posts )

    const handleActiveSortClick = e =>{
        setActiveSort(e.target.innerText)
    }

    useEffect(() => {
        dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.root} >
            <Grid item container 
                xs={11} 
                className={classes.buttonsContainer}
            >
                <Grid item container
                    xs={8}
                    className={classes.sortingButtons}
                >
                    {buttonArray && buttonArray.map((item, index)=>{
                        return(
                        <Button 
                            disableRipple
                            className={`${classes.buttons} ${activeSort === item.text ? classes.activeButtons : ''}`} 
                            onClick={ e => handleActiveSortClick(e)} 
                            key={`${item.tex}_${index}`}
                        >
                            {item.text}
                        </Button>)
                    })}
                </Grid>
                
                <LogInButton />

            </Grid>


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
                            <Post post={post} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
