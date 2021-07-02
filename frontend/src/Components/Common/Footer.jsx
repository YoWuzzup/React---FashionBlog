import React from 'react'
import { Links } from '../index'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, InputLabel, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor: '#fff',
        width: '100%'
    },
    inner:{
        width: '80%',
        margin: '100px auto 100px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]:{
            flexFlow: 'column'
        }
    },
    leftSide:{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-start',
        flexBasis: '30%'
    },
    emailForm:{
        margin: '50px 0 95px',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    labelAndInput:{
        display: 'flex',
        flexFlow: 'column',
        fontSize: '19px',
        flexBasis: '45%',
        margin: '10px 0 0'
    },
    input:{
        fontSize: 'inherit',
        height: '30px',
        outline: 'none',
        border: 'none',
        borderBottom: '1px solid #000' 
    },
    btn:{
        flexBasis: '45%',
        outline: 'none',
        height: '50px',
        backgroundColor: '#fff',
        transition: 'all .2s ease-in-out',
        fontSize: 'inherit',
        margin: '20px 0 0',
        '&:hover':{
            backgroundColor: '#000',
            cursor: 'pointer',
            color: '#fff'
        }
    },
    para:{
        fontSize: '17px',
        marginBottom: '40px'
    },
    rightSide:{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-start',
        flexBasis: '30%'
    },
    labels:{
        marginBottom: '10px',
        fontSize: 'inherit'
    },
    mainForm:{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        '& > *':{
            flexBasis: '40%'
        }
    },
    textarea:{
        flexBasis: '100%'
    },
    textAreaInput:{
        height: '100px',
        resize: 'none'
    }
}))

export default function Footer() {
    const [allValues, setAllValues] = React.useState({
        name: '',
        surname: '',
        mainEmail: '',
        subject: '',
        message: ''
    })
    const [email, setEmail] = React.useState('')
    const classes = useStyles()

    const handlgeEmail = e =>{
        setEmail({...email, [e.target.name]: e.target.value })
    }

    const handleChange = e =>{
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    return (
    <div className={classes.root} >
        <div className={classes.inner} >

            <div className={classes.leftSide} >
                <Links jContent='flex-start' />

                <form id='emailForm'
                    className={classes.emailForm}
                >
                    <Typography variant='h4' 
                        style={{marginBottom: '30px', fontWeight: '600', 
                            flexBasis: '100%' }}
                    >
                        Sign Up For My Latest
                    </Typography>

                    <div className={classes.labelAndInput}>

                        <InputLabel  htmlFor='email' className={`${classes.emailForm_label} ${classes.labels}`} 
                            color='secondary' required
                        >
                            Email
                        </InputLabel>

                        <InputBase  type='email' id='email' name='email'  
                            className={classes.input}
                            onChange={handlgeEmail}
                        />

                    </div>

                    <button type='submit' form='emailForm' value='Join' 
                        className={classes.btn}
                    >
                        Join
                    </button>
                </form>

                <Typography variant='h4' 
                    style={{ fontWeight: '600', margin: '0 0 25px'}}
                >
                    Collabs
                </Typography>
                
                <p className={classes.para}>
                    For PR and commercial enquiries please contact: 
                    info@mysite.com
                </p>

            </div>
        


            <div className={classes.rightSide} >
                
                <p className={classes.para}>
                    You can also reach out directly to me
                </p>

                <form id='main'
                    className={classes.mainForm}
                >

                    <div className={classes.labelAndInput}>
                        <InputLabel  htmlFor='name' className={classes.labels} 
                            color='secondary' 
                        >
                            Name
                        </InputLabel>

                        <InputBase  type='text' id='name' name='name'  
                            className={classes.input}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={classes.labelAndInput}>
                        <InputLabel  htmlFor='surname' className={classes.labels} 
                            color='secondary' 
                        >
                            Surname
                        </InputLabel>

                        <InputBase  type='text' id='surname' name='surname'  
                            className={classes.input}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className={classes.labelAndInput}>
                        <InputLabel  htmlFor='mainEmail' className={classes.labels} 
                            color='secondary' required
                        >
                            Email
                        </InputLabel>

                        <InputBase  type='email' id='mainEmail' name='mainEmail'  
                            className={classes.input}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className={classes.labelAndInput}>
                        <InputLabel  htmlFor='subject' className={classes.labels} 
                            color='secondary' 
                        >
                            Subject
                        </InputLabel>

                        <InputBase  type='text' id='subject' name='subject'  
                            className={classes.input}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className={`${classes.labelAndInput}  ${classes.textarea}`}>
                        <InputLabel  htmlFor='message' className={classes.labels} 
                            color='secondary' 
                        >
                            Message
                        </InputLabel>

                        <textarea  type='text' id='message' name='message'  
                            rows={4} className={`${classes.input} ${classes.textAreaInput}`}
                            onChange={handleChange}
                        />
                    </div>

                    <button type='submit' form='main' value='Submit'
                        className={classes.btn}
                    >
                        Submit
                    </button>
                </form>

            </div>

        </div>
    </div>
    )
}
