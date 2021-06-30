import React from 'react'
import { Grid } from '@material-ui/core'
import { Instagram, Facebook, YouTube, LinkedIn } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    linksContainer:{
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            margin: '10px 0 10px',
        }
    },
    links: {
        margin: '0 7px'
    }
}))

export default function Links({ jContent }) {
    const classes = useStyles();

    return (
        <Grid container item xs={2} 
            justify={`${jContent}`} alignItems='center' alignContent='center' 
            className={classes.linksContainer}
        >
            <a href="https://www.instagram.com/" className={classes.links} >
                <Instagram />
            </a>
            <a href="https://www.facebook.com/" className={classes.links} >
                <Facebook />
            </a>
            <a href="https://www.youtube.com/" className={classes.links} >
                <YouTube />
            </a>
            <a href="https://www.linkedin.com/" className={classes.links} >
                <LinkedIn />
            </a>
        </Grid>
    )
}
