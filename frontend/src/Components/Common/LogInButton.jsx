import React from 'react'
import { Button } from '@material-ui/core'

export default function LogInButton() {
    const handleClick = e =>{
        console.log('not done yet lol');
    }

    return (
        <Button 
            disableRipple
            style={{ 
                border: '1px solid rgb(124, 100, 14)', borderRadius: '0', color: 'rgb(124, 100, 14)',
                height: '36px', font: 'normal normal normal 13px/1.4em avenir-lt-w01_35-light1475496,sans-serif',
                textTransform: 'none',
                padding: '5px 35px'
                }}
            onClick={handleClick}
        >
            Log in / Sign up
        </Button>
    )
}
