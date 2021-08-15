import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePostSortingButton } from '../../Redux/Actions/Buttons'
import { Button, Grid, makeStyles } from '@material-ui/core'
import { LogInButton } from '../'

const useStyles = makeStyles(theme =>({
    buttonsContainer:{
        justifyContent: 'space-between',
        margin: '0 auto',
        [theme.breakpoints.down('md')]:{
            justifyContent: 'center',
        },
        [theme.breakpoints.down('xs')]:{
            alignItems: 'center',
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
}))

const buttonArray = [
    {text: 'All Posts', query: 'allposts'}, 
    {text: 'Fashion', query: 'fashion'}, 
    {text: 'Beauty', query: 'beauty'}, 
    {text: 'Home', query: 'home'}
]

export default function PostSortingButtons() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const activeSort = useSelector( state => state.postSortingButton)

    const handleActiveSortClick = e =>{
        dispatch(changePostSortingButton(e.target.innerText))
    }

    return (
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
                        className={`${classes.buttons} ${activeSort === item.query ? classes.activeButtons : ''}`} 
                        onClick={ e => handleActiveSortClick(e)} 
                        key={`${item.tex}_${index}`}
                    >
                        {item.text}
                    </Button>)
                })}
            </Grid>
            
            <LogInButton />

        </Grid>
    )
}
