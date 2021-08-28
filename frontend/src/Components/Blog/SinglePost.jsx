import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { makeStyles, Grid, Typography, CardMedia, Button } from '@material-ui/core'
import { FiberManualRecord, MoreVert } from '@material-ui/icons'

import { PostSortingButtons, Links, LikesButton, RecentPosts, PostCommentSection } from '../'

const useStyles = makeStyles(theme=>({
    root: {
        width: '100%',
        padding: '105px 0 0',
        backgroundColor: '#f1f0e9',
    },
    sorting:{
        width: '60%',
        margin: '0 auto',
        padding: '0 0 20px'
    },
    postData:{
        backgroundColor: '#fff',
        width: '60%',
        margin: '0 auto 27px',
        padding: '60px 0 0'   
    },
    info:{
        fontSize: '13px',
        margin: '0 auto 27px',
    },
    hoverEffect:{
        transition: 'all .2s ease-in-out',
        cursor: 'pointer',
        '&:hover':{
            color: '#94543b',
        }
    },
    title:{
        width: "100%",
        textAlign: "left",
        margin: '0 0 25px'
    },
    image:{
        width: '100%',
        minHeight: '500px',
        height: 'auto',
        margin: '40px auto',
        objectFit: 'cover'
    },
    paras:{
        textAlign: 'left',
        width: '100%',
        margin: '0 auto',
        color: '#000'
    },
    para:{
        fontSize: '17px',
        margin: '0 auto 25px',
    },
    quote:{
        width: '95%',
        fontSize: '22px',
        fontStyle: 'italic',
        margin: '0 auto 50px',
        padding: '10px 20px',
        borderLeft: '2px solid #80640c'
    },
    header:{
        fontSize: '20px',
        margin: '0 auto 35px',
        fontWeight: '600'
    },
    linksWrapper:{
        padding: '20px 0',
        borderTop: '2px solid grey',
        borderBottom: '2px solid grey'
    },
    tagButtons: {
        fontSize: '18px',
        textTransform: 'capitalize',   
        float: "right",
        padding: '0',
        '&:hover':{
            color: 'rgb(124, 100, 14)',
            backgroundColor: 'inherit',
        }
    },
    likes:{
        transition: 'all .2s ease-in-out',
        cursor: 'pointer',
        justifyContent: 'flex-end'
    },
    statistics:{
        margin: '20px 0 60px'
    }
}))


// svg avatar for now 
const Svg = ()=>{
    return(
        <svg width="32" height="32" viewBox="0 0 1000 1000" className="HOi00" style={{ margin: '0 10px'}} >
            <circle cx="500" cy="500" r="500" fill="#cccccc"></circle>
            <path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path>
        </svg>
    )
}

export default function SinglePost() {
    const classes = useStyles()
    const { id } = useParams()
    const singlePostInfo = useSelector( state => state.posts.find(e => e.id === id || e._id === id))
    const thisPostComments = singlePostInfo && singlePostInfo.comments
    const date = singlePostInfo && new Date(`${singlePostInfo.date}`)
    const day = singlePostInfo && date.getDate()
    const month = singlePostInfo && date.toLocaleString('default', { month: 'short' })

    const handleClick = e =>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <Grid container
            direction="column"
            alignItems="center"
            className={classes.root}
        >

            <div className={classes.sorting} >
                <PostSortingButtons />
            </div>

            {singlePostInfo && 
                <Grid 
                    className={classes.postData}
                    container item
                    direction="column"
                    alignItems="center"
                    justify='center'
                    xs={7}
                >

                    <Grid className={classes.info} 
                        item container
                        xs={10}
                        direction='row'
                        alignContent='space-between'
                    >
                        <Svg />

                        <Grid item container
                            alignItems="center"
                            xs={1}
                        >
                            {singlePostInfo.author}
                            <FiberManualRecord style={{ fontSize: 4, margin: '0 7px' }} />
                        </Grid>

                        <Grid item container
                            alignItems="center"
                            xs={1}
                        >
                            {`${month} ${day}`}
                            <FiberManualRecord style={{ fontSize: 4, margin: '0 7px' }} />
                        </Grid>

                        <Grid item container
                            alignItems="center"
                            xs={2}
                            className={classes.readingLength}
                        >
                            {`${singlePostInfo.readingLength} min read`}
                        </Grid>

                        <MoreVert className={`${classes.hoverEffect}`} style={{ fontSize: 20, margin: '0 0 0 auto'  }} />
                    </Grid>

                    
                    <Grid className={classes.info} 
                        item container
                        xs={10}
                        direction='column'
                        alignContent='center'
                    >

                        <Typography gutterBottom variant="h4" component="h2" align='left' 
                            style={{ fontWeight: '600' }}
                            className={classes.title}
                        >
                            {singlePostInfo.title}
                        </Typography> 

                        <Typography align='left' >
                            {singlePostInfo.subtitle}
                        </Typography>

                        <CardMedia 
                            component="img"
                            className={classes.image}
                            src={`${singlePostInfo.image}`}
                            title={`${singlePostInfo.title}`}
                        />

                        <Grid item container
                            alignItems="center"
                            xs={12}
                        >
                            {singlePostInfo.content.map((item,index)=>{
                                return(
                                    <Typography 
                                        variant="body2" 
                                        color="textSecondary" 
                                        component="p" 
                                        gutterBottom 
                                        key={`${item.type}_${index}`}
                                        className={`${classes[item.type]} ${classes.paras}`}
                                    >
                                        {item.type === 'quote' ? `"` : ''}
                                            {item.text}
                                        {item.type === 'quote' ? `"` : ''}
                                    </Typography>
                                )})}
                        </Grid>

                    </Grid>

                    <Grid container item
                        direction="row"
                        alignItems="center"
                        justify='space-between'
                        xs={10}
                        className={classes.linksWrapper}
                    >
                        <Links jContent='center' />
                        
                        <Grid item container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            xs={8}
                        >
                            {singlePostInfo.tags.map((item, index)=>{
                                return(
                                    <Button 
                                        disableRipple
                                        key={`${item}_${index}`} variant="text"
                                        className={`${classes.tagButtons}`}
                                    >
                                        {item}
                                    </Button>)
                            })}
                        </Grid>
                    </Grid>

                    <Grid container item
                        direction="row"
                        alignItems="center"
                        justify='space-between'
                        xs={10}
                        className={classes.statistics} 
                    >
                        <Grid container item
                            direction="row"
                            alignItems="center"
                            justify='space-between'
                            xs={3}
                        >
                            <Typography 
                                variant="body2" 
                                color="textSecondary" 
                                component="p" 
                                gutterBottom 
                            >
                                {singlePostInfo.views} views
                            </Typography>

                            <Typography 
                                variant="body2" 
                                color="textSecondary" 
                                component="p" 
                                gutterBottom 
                            >
                                {singlePostInfo.comments.length} comment{singlePostInfo.comments.length > 1 ? 's' : ''}
                            </Typography>
                        </Grid>

                        <LikesButton postId={singlePostInfo.id ?? singlePostInfo._id} likes={singlePostInfo.likes} likesStyles={classes.likes} actionType={'LIKE_POST'} />
                    </Grid>


                </Grid>
            }

            <Grid item container 
                direction="row"
                alignItems="center"
                justify='space-between'
                xs={7}
                style={{ marginBottom: '20px' }}
            >
                <Typography 
                    variant="body1" 
                    color="initial" 
                    component="p" 
                    gutterBottom 
                >
                    Recent Posts
                </Typography>

                <Button 
                    disableRipple
                    variant="text"
                    className={`${classes.tagButtons}`}
                    onClick={handleClick}
                >   
                    <Link to='/blog' >
                        See All
                    </Link>
                </Button>
            </Grid>

            <RecentPosts fetchLength={2} />
            <PostCommentSection comments={thisPostComments} />
        </Grid> 
    )
}
