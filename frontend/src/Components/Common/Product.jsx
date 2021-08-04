import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    root:{
        width: '220px',
        minHeight: 'auto',
        display: 'flex',
        flexFlow: 'column',
        margin: '0 55px 100px'
    },
    imagebackgound:{
        width: '220px',
        height: '330px',
        position: 'relative',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0 0 20px'
    },
    title:{
        textAlign: 'center',
    }
}))

const Svg = ({ title })=>{
    const niceTitle = title.toLowerCase().replace(/\s+/g, '')

    return(
    <Link to={`product/${niceTitle}`}>
        <svg width="32px" height="32px"  style={{position: 'absolute', bottom: '0', left: '45%'}}
            preserveAspectRatio="xMidYMid meet" data-bbox="13.5 13.5 173 173" viewBox="13.5 13.5 173 173" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="svgcid--kvp22hgos3qd">
            <title id="svgcid--kvp22hgos3qd">open</title>
            <g>
                <path d="M100 13.5c-47.7 0-86.5 38.8-86.5 86.5s38.8 86.5 86.5 86.5 86.5-38.8 86.5-86.5-38.8-86.5-86.5-86.5zm43 90.8h-37.8v37.9c0 2.3-1.6 4.2-3.9 4.2s-3.9-1.9-3.9-4.2v-37.9H57.6c-2.3 0-4.2-2-4.2-4.3s1.9-4.3 4.2-4.3h39.8V56.8c0-2.3 1.6-4.2 3.9-4.2s3.9 1.9 3.9 4.2v38.8H143c2.3 0 4.2 2 4.2 4.3s-1.9 4.4-4.2 4.4z" fill="#fff" data-color="1"></path>
            </g>
        </svg>
    </Link>
    )
}

export default function Product({ item }) {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            <div className={classes.imagebackgound} 
                style={{ backgroundImage: `url(${item.image})`}}
            >
                <Svg title={item.title} />
            </div>

            <div className={classes.title} >
                {item.title}
            </div> 
        </div>
    )
}
