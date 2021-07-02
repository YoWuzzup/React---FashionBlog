import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    header:{
        width: '100%',
        height: '225px',
        backgroundColor: '#e0bcb4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '95px 0 0',
        [theme.breakpoints.down('sm')]: {
            margin: '150px 0 0',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '350px 0 0',
            height: '150px',
        }
    },
    title:{
        fontFamily: 'playfairdisplay-bold, "playfair display", serif',
        fontSize: '80px',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
            fontSize: '60px',
            fontWeight: '600',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
            fontWeight: '600',
        }
    },
}))

export default function Header({ title }) {
    const classes = useStyles()

    return (
            <div className={classes.header} >
                <div className={classes.title} >
                    {title}
                </div>
            </div>
    )
}
