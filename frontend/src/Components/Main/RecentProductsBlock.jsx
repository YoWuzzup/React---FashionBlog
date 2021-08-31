import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecentProducts } from '../../Redux/Actions/Products'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Product } from '../'

const useStyles = makeStyles(theme => ({
    root:{
        padding: '100px 0 0',
        backgroundColor: '#f8f4ec',
    },
    rootInner:{
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]:{
            justifyContent: 'center'
        }
    },
    header:{
        fontWeight: 'bolder',
        margin: '0 0 35px'
    }
}))

export default function RecentProductsBlock() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const fetchedRecentProducts = useSelector(state => state.recentProducts)

    useEffect(() => {
        dispatch(getRecentProducts(4))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid 
            container
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Typography variant='h4' 
                className={classes.header}
            >
                Shop The Look
            </Typography>

            <Grid item container
                direction="row"
                alignItems='center'
                xs={11}             
                className={classes.rootInner}
            >
                {fetchedRecentProducts.map((prod, index)=>{
                    return(
                        <Product key={`${prod.name}_${index}`} item={prod} spacing={1}/>
                   ) 
                })}
            </Grid>
        </Grid>
    )
}
