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
        padding: '60px 0 0 0'
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
            justifyContent: 'center'
        }
    },
    activeButtons:{
        color: 'rgb(124, 100, 14)',
    }
}))

const buttonArray = [{text: 'All Posts'}, {text: 'Fashion'}, {text: 'Beauty'}, {text: 'Home'}]

export default function BlogContent() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [activeSort, setActiveSort] = React.useState('All Posts')
    const fetchedPosts = useSelector( state=> state.posts )
    console.log(fetchedPosts);

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
                style={{ justifyContent: 'space-between'}}
            >
                <Grid item container
                    xs={5}
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
            >
                {fetchedPosts && fetchedPosts.map((post, index)=>{
                    return(
                        <Post key={`${post}_${index}`} />
                    )
                })}
            </Grid>
        </div>
    )
}
