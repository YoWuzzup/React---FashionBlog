import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Link } from '@material-ui/core/'

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

function WithButtonStyles({ classes, name, url }) {

    return (
    <Link href={`/${url}`} underline='none' >
        <Button className={classes.root}  
            disableRipple
        >
            {name}
        </Button>
    </Link>
    )
}

export default withStyles(styles)(WithButtonStyles);