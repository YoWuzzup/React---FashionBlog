import React from 'react'
import { Grid } from '@material-ui/core'
import { FavoriteBorder } from '@material-ui/icons'

export default function LikesButton({ likes, likesStyles }) {
    return (
        <Grid item container
            alignItems="center"
            xs={2}
            className={likesStyles}
        > 
            {likes}
            <FavoriteBorder style={{ fontSize: 20, color: 'red', margin: '0 0 0 7px'  }} />
        </Grid>
    )
}
