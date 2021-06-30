import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { weed, girl } from '../../Images'

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        flexFlow: 'row nowrap',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            flexFlow: 'column',
        },
        '& > *':{
            flexBasis: '50%',
            height: 'inherit',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            
        }
    },
    block: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        alignItems: 'center',
        backgroundPosition: 'center'
    },
    links:{
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: '80px',
        fontWeight: '600',
        fontFamily: "Times New Roman",
        zIndex: '2',
        height: '110px',
        transition: 'all .3s ease-in-out',
        '&:hover':{
            color: '#dfbfb1',
        }
    },
    shadow:{
        position: 'absolute',
        width: '100%',
        height: 'inherit',
        backgroundColor: '#000',
        opacity: '0.3'
    }
}))

export default function MainPics() {
    const classes = useStyles()

    return (
    <div className={classes.root} >
        <div className={classes.shadow} />

        <div style={{backgroundImage: `url(${girl})`}} className={classes.block}>
            <Link to='blog' className={classes.links}>
                Blog
            </Link> 
        </div>
        
        <div style={{backgroundImage: `url(${weed})`}} className={classes.block}>
            <Link to='Shop' className={classes.links}>
                Shop
            </Link>
        </div>
    </div>
    )
}
