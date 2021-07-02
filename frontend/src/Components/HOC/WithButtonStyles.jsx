import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core/'

const styles = {
    root:{
        outline: 'none',
        backgroundColor: '#fff',
        transition: 'all .3s ease-in-out',
        fontSize: 'inherit',
        margin: '20px 0 0',
        padding: '0',
        border: '1px solid #000',
        borderRadius: '0',
        width: '200px',
        height: '50px',
        '&:hover':{
            backgroundColor: '#000',
            cursor: 'pointer',
            color: '#fff'
        }
    },
};

function WithButtonStyles({ classes, name }) {
    return (
    <Button className={classes.root}  
        disableRipple={true}
    >
        {name}
    </Button>)
}

export default withStyles(styles)(WithButtonStyles);