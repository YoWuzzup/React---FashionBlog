import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/Actions/Products'
import { Product } from '../'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root:{
        padding: '100px 0 0',
        backgroundColor: '#f8f4ec',
    },
    rootInner:{
        [theme.breakpoints.down('md')]:{
            justifyContent: 'center'
        }
    }
}))

export default function ShopContent() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const fetchedProducts = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid 
            container
            justify="center"
            alignItems="center"
            className={classes.root}
            xs={12}
        >
            <Grid item  container
                direction="row"
                justify="space-between"
                alignItems="center"
                xs={11}             
                className={classes.rootInner}

            >
                {fetchedProducts.map((prod, index)=>{
                    return(
                        <Product key={`${prod.name}_${index}`} item={prod} />
                   ) 
                })}
            </Grid>
        </Grid>
    )
}
