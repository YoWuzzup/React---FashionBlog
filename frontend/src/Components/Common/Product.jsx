import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    root:{
        width: '220px',
        minHeight: 'auto',
        display: 'flex',
        flexFlow: 'column'
    },
    imagebackgound:{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: 'no-repeat center/center cover',
        margin: '0 0 20px'
    },
    title:{
        textAlign: 'center',
    }
}))

const Svg = ()=>{
    return(
    <svg width="32px" height="32px"
        preserveAspectRatio="xMidYMid meet" data-bbox="13.5 13.5 173 173" viewBox="13.5 13.5 173 173" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="svgcid--kvp22hgos3qd"><title id="svgcid--kvp22hgos3qd">open</title>
        <g>
            <path d="M100 13.5c-47.7 0-86.5 38.8-86.5 86.5s38.8 86.5 86.5 86.5 86.5-38.8 86.5-86.5-38.8-86.5-86.5-86.5zm43 90.8h-37.8v37.9c0 2.3-1.6 4.2-3.9 4.2s-3.9-1.9-3.9-4.2v-37.9H57.6c-2.3 0-4.2-2-4.2-4.3s1.9-4.3 4.2-4.3h39.8V56.8c0-2.3 1.6-4.2 3.9-4.2s3.9 1.9 3.9 4.2v38.8H143c2.3 0 4.2 2 4.2 4.3s-1.9 4.4-4.2 4.4z" fill="#fff" data-color="1"></path>
        </g>
    </svg>)
}

export default function Product() {
    const classes = useStyles()

    const image = '#'
    return (
        <div className={classes.root} >
            <div className={classes.imagebackgound} 
                style={{backgoundImage: `url(${image})`}}
            >
                <Svg />
            </div>

            <div className={classes.title} >
                name
            </div> 
        </div>
    )
}
