import React from 'react'
import { Product } from '../'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    root:{
        padding: '100px 0 100px',
        backgroundColor: '#f8f4ec'
    }
}))

export default function ShopContent() {
    const classes = useStyles()
    return (
        <Grid 
            container
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Grid item xs={12} sm={8} container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Product spacing={5}/>
                <Product spacing={5}/>
                <Product spacing={5}/>
                <Product spacing={5}/>
                <Product spacing={5}/>
                <Product spacing={5}/>
                <Product spacing={5}/>
                <Product spacing={5}/>
            </Grid>
        </Grid>
    )
}
