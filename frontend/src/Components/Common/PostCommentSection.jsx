import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        backgroundColor: '#fff',
        margin: '0 0 100px'
    },
    comments:{
        width: '85%',
        margin: '30px 0 30px',
        padding: '0 0 20px',
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '20px',
        borderBottom: '1px solid grey'
    },
    input:{
        width: '100%',
        outline: 'none',
        border: 'none',
        margin: '0 0 30px',
        '&:focus':{
            outline: 'none'
        }
    }
})

export default function PostCommentSection({ comments }) {
    const classes = useStyles()
    const [comment, setComment] = React.useState('')
    const handleChange = e =>{
        e.preventDefault()
        setComment(e.target.value);
    }

    return (
        <Grid container item
            direction="column"
            alignItems="center"
            justify='center'
            xs={7}
            className={classes.root}
        >
            <Typography 
                variant="body1" 
                color="initial" 
                component="h2" 
                className={classes.comments}
            >
                Comments
            </Typography>

            <Grid container item
                direction="row"
                alignItems="center"
                justify='center'
                xs={10}
            >   

                <TextField 
                    onChange={handleChange} 
                    value={comment}
                    placeholder='write a comment...'
                    type="text" name="comment"
                    className={classes.input} 
                    multiline 
                    variant='standard'
                />

            </Grid>

            {comments && comments.map((item,index)=>{
                return(
                    <Grid key={`${item}_${index}`}

                    >
                        {item}
                        <div>PS I'm too lazy, sorry:(</div> 
                    </Grid>
            )})}
        </Grid>
    )
}
