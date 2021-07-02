import React from 'react'
import { makeStyles } from '@material-ui/core'
import { me, secondMe, staticBg } from '../../Images'
import { WithButtonStyles } from '../'
import { NameContext } from '../../Context'

const useStyles = makeStyles(theme =>({
    root:{
        width: '100%',
        backgroundColor: '#f8f4ec',
        display: 'flex',
        flexFlow: 'row nowrap',
        [theme.breakpoints.down('md')]:{
            flexFlow: 'column',
        },
        '& > *':{
            flexBasis: '50%'
        }
    },
    leftSide:{
        backgroundColor: '#f8f4ec'
    },
    leftContent:{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: '300px 0 0',
        position: 'relative',
        minHeight: '625px',
        '& > p':{
            width: '50%',
            fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif',
            fontSize: '17px',
            letterSpacing: 'normal',
            lineHeight: '25.5px',
            textAlign: 'center'
        }
    },
    imageAndName:{
        position: 'absolute',
        top: '0',
        transform: 'translateY(-175px)',
        width: '315px',
        height: 'auto',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center'
    },
    name:{
        fontSize: '36px',
        fontWeight: '600',
        margin: '0 0 20px'
    },
    rightSide:{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    stickyBackground:{
        width: '100%',
        minHeight: '430px',
        backgroundImage: `url(${staticBg})`,
        backgroundPosition: 'right',
        backgroundSize: '50% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        [theme.breakpoints.down('md')]:{
            backgroundSize: '100% 100%',
        },
    },
    secondMe:{
        margin: '100px 0 0',
        width: '300px',
        height: 'auto',
        [theme.breakpoints.down('md')]:{
            margin: '100px 0 100px',
        },
    },
    mySecondImage:{
        backgroundColor: '#f8f4ec',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    removableDiv:{
        width: '100%',
        height: '100px',
        backgroundColor: '#f8f4ec'
    }
}))

export default function AboutContent({ path }) {
    const classes = useStyles()
    const nameContext = React.useContext(NameContext)
    const checkingPathname = window.location.pathname.includes(path)

    return (
    <div className={classes.root} >
        <div className={classes.leftSide} >
        
            <div className={classes.leftContent} >
                <div className={classes.imageAndName}>

                    {!checkingPathname ? 
                        <div className={classes.name}>
                            {nameContext}
                        </div> 
                    : 
                        null
                    }
            
                    <img alt='me' src={`${me}`} 
                        className={classes.imgMe}
                    />
                </div>

                <p className={classes.para} 
                    style={{ margin: '215px 0 0'}}
                >
                    I'm a paragraph. 
                    Click here to add your own text and edit me. 
                    It’s easy. 
                    Just click “Edit Text” or double click me to add 
                    your own content and make changes to the font. 
                    Feel free to drag and drop me anywhere you like on 
                    your page. I’m a great place for you to tell a story 
                    and let your users know a little more about you.​
                </p>

                {!checkingPathname ? 
                    <WithButtonStyles name={'Read More'} /> 
                :
                <p className={classes.para}>
                    This is a great space to write a long text about 
                    your company and your services. 
                    You can use this space to go into a little more 
                    detail about your company. 
                    Talk about your team and what services you provide. 
                    Tell your visitors the story of how you came up with the 
                    idea for your business and what makes you different from 
                    your competitors. Make your company stand out and 
                    show your visitors who you are.
                </p>}
            </div>
                
            {!checkingPathname ? 
                null
            :
            <div className={classes.removableDiv} />
            }

        </div>
        
        <div className={classes.rightSide} >
            
            <div className={classes.stickyBackground} />
            
            {!checkingPathname ? 
                null
            :
            <div className={classes.mySecondImage} >
                <img alt='me' src={`${secondMe}`} 
                    className={classes.secondMe} 
                />
            </div>}
        
        </div>
    </div>
    )
}
