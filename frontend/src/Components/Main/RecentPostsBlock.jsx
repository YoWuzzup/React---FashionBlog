import React from 'react'
import { makeStyles, Grid, Typography  } from '@material-ui/core'
import { RecentPosts, WithButtonStyles } from '../'
import { NameContext } from '../../Context'

const useStyles = makeStyles(theme=>({
    root: {
        margin: '0 0 10px'
    },
    contextName:{
        color: '#7C640E',
        margin: '75px 0 15px'
    },
    header:{
        fontWeight: 'bolder',
        margin: '0 0 35px'
    },
    recentPosts:{
        margin: '0 auto',
        justifyContent: 'center',
        display: 'flex',
        [theme.breakpoints.down('md')]:{
            alignContent: 'center',
            justifyContent: 'center'
        }
    }
}))

export default function RecentPostsBlock() {
    const classes = useStyles()
    const nameContext = React.useContext(NameContext)
    
    return (
        <Grid container
            alignContent='center'
            direction='column'
            alignItems='center'
            className={classes.root}
        >
            <Typography variant='body1' 
                className={classes.contextName}
            >
                {nameContext}
            </Typography>

            <Typography variant='h4' 
                className={classes.header}
            >
                My Latest Posts
            </Typography>

            <RecentPosts fetchLength={3} rootStyle={classes.recentPosts} page='main' />

            <WithButtonStyles name={'Read More'} url={'blog'} /> 
            
        </Grid>
    )
}
