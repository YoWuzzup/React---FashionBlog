import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { AppBar, MenuList, MenuItem, Typography } from '@material-ui/core'
import { Links } from '../'

const useStyles = makeStyles((theme)=>({
    root: {
        backgroundColor: '#f1f0e9',
        color: `#000`,
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: 'none',
        width: '100%',
        height: '87px',
        [theme.breakpoints.down('sm')]: {
            flexFlow: 'column',
            height: 'auto',
          },
    },
    menuList: {
        display: 'flex',
        flexFlow: 'row nowrap',
        marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            flexFlow: 'column',
        }
    },
    name : {
        fontSize: '25px',
        fontWeight: '600',
        fontFamily: 'Times New Roman',
        marginLeft: '100px',
        [theme.breakpoints.down('sm')]: {
            margin: '10px 0 0',
        },
    },
    menuItem: {
        fontSize: '18px',
        backgroundColor: '#f1f0e9',
        textTransform: 'capitalize',
        transition: 'none !important',
        '&:hover, &:focus':{
            color: 'rgb(124, 100, 14)',
            backgroundColor: 'inherit',transition: 'none !important'
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center'
        }
    },
    activeMenuItem:{
        color: 'rgb(124, 100, 14)',
        disableRipple: true,
    }
}))

const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
});

export default function NavigationBar() {
    const classes = useStyles();
    const [selectedMenuItem, setSelectedMenuItem] = useState('home')
    const ownerName = 'BellaÖ'
    const btns = [
        {name: 'home', url: ''}, 
        {name: 'blog', url: 'blog'}, 
        {name: 'shop', url: 'shop'}, 
        {name: 'about', url: 'about'}, 
        {name: 'contact', url: ''}
    ]
    
    const handleClick = (e)=>{
        setSelectedMenuItem(e.target.name);
    }

    return (
    <AppBar position='fixed' className={classes.root} >

        <Typography className={classes.name} >{ownerName}</Typography>

        <ThemeProvider theme={theme} >
            <MenuList className={classes.menuList} >

                {btns && btns.map((item,index)=>{
                    return(
                    <MenuItem 
                        className={`${classes.menuItem} ${selectedMenuItem === item.name ? classes.activeMenuItem : ''}`} 
                        component={Link} 
                        to={`/${item.url}`} onClick={e => handleClick(e)} name={item.name} key={`${item.name}_${index}`}
                    >
                        {item.name}
                    </MenuItem>)
                })}

            </MenuList>
        </ThemeProvider>
        
        <Links jContent='center' />

    </AppBar>
    )
}
