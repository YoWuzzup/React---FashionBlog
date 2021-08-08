import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { FiberManualRecord, MoreVert, FavoriteBorder, ChatBubbleOutline, VisibilityOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
    root:{
        backgroundColor: '#fff',
        padding: '0 0 15px',
        margin: '0 0 50px',
    },
    image: {
        width: '100%',
        height: '340px',
        objectFit: 'cover'
    },
    info:{
        margin: '25px 0 0'
    },
    data:{
        fontSize: '12px',
        color: '#000',
        justifyContent: 'space-around',
        margin: '0 0 12px'
    },
    when:{
        opacity: .7
    },
    readingLength:{
        justifyContent: 'space-around'
    },
    title: {
        font: `normal normal 600 1.4em playfairdisplay-bold,"playfair display",serif`,
        width: '90%',
        margin: '0 auto 10px',
        padding: '0 0 30px',
        textAlign: 'left',
        borderBottom: '1px solid #d0cccc',
        transition: 'all .2s ease-in-out',
        '&:hover':{
            color: '#94543b',
        }
    },
    hoverEffect:{
        transition: 'all .2s ease-in-out',
        cursor: 'pointer',
        '&:hover':{
            color: '#94543b',
        }
    },
    likes:{
        transition: 'all .2s ease-in-out',
        cursor: 'pointer'
    },
    statistics: {
        justifyContent: 'space-around',
    },
    between: {
        justifyContent: 'space-between',
    }
})

// svg avatar for now 
const Svg = ()=>{
    return(
        <svg width="32" height="32" viewBox="0 0 1000 1000" className="HOi00" style={{ margin: '0 10px'}} >
            <circle cx="500" cy="500" r="500" fill="#cccccc"></circle>
            <path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path>
        </svg>
    )
}

export default function Post({ post }) {
    const classes = useStyles()
    const date = new Date(`${post.date}`)
    const day = date.getDate()
    const month = date.toLocaleString('default', {month: 'short'})

    return (
        <div
            className={classes.root} 
        >
            <Link to={`posts/${post.id}`} >
                <img alt={`${post.title}`} src={post.image} className={classes.image} />
            </Link>

            <Grid className={classes.info} 
                container item
                direction="column"
                alignItems="center"
            >

                <Grid className={classes.data}
                    item container
                    direction="row"
                    alignItems="center"
                >

                    <Svg />

                    <Grid className={classes.when} 
                        item container
                        xs={8}
                        direction='row'
                    >
                        <Grid item 
                            xs={12}
                        >
                            {post.author}
                        </Grid>

                        <Grid item
                            xs={2}
                        >
                            {month} {day} 
                        </Grid>

                        <Grid item container
                            alignItems="center"
                            xs={3}
                            className={classes.readingLength}
                        >
                            <FiberManualRecord style={{ fontSize: 6 }} />
                            {post.readingLength} min
                        </Grid>
                    </Grid>

                    <MoreVert className={`${classes.subMenu} ${classes.hoverEffect}`} style={{ fontSize: 20 }} />
                    
                </Grid>

                <Link to={`posts/${post.id}`} className={classes.title}>
                    <h3 style={{ margin: '0', minHeight: '70px' }}>
                        {post.title}
                    </h3>
                </Link>
                <Grid  className={classes.statistics} 
                    item container
                    direction='row'
                >

                        <Grid item container
                            alignItems="center" 
                            xs={2}
                        >
                            <VisibilityOutlined style={{ fontSize: 20, margin: '0 7px 0 0' }} />
                            {post.views}
                        </Grid>

                        <Grid item container
                            alignItems="center"
                            xs={2}
                            className={classes.hoverEffect}
                        >
                            <ChatBubbleOutline style={{ fontSize: 20, margin: '0 7px 0 0' }} />
                            {post.comments.length} 
                        </Grid>

                        <Grid item container
                            alignItems="center"
                            xs={2}
                            className={classes.likes}
                        > 
                            {post.likes}
                            <FavoriteBorder style={{ fontSize: 20, color: 'red', margin: '0 0 0 7px'  }} />
                        </Grid>

                </Grid>

            </Grid>
        </div>
    )
}
