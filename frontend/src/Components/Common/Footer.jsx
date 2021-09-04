import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Links } from '../index'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, InputLabel, Typography } from '@material-ui/core'
import { userSendEmail } from '../../api/index'

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
        flexBasis: '100%',
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


const CustomForm = ({ status, message, onValidated }) => {
    const classes = useStyles()
    const [ email, setEmail ] = React.useState(null)
    const [ , setError ] = React.useState(null)

    const submit = (e) => {
        e.preventDefault()
        setError(null);

        if ( !email ) {
            setError( 'Please enter a valid email address' );
        return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }
  
    const handleInputKeyEvent = ( event ) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          submit()
        }
    }

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexFlow: 'row wrap',
            flexBasis: '100%'
        }}
        >
            {status === "sending" && <div >sending...</div>}
            

            <InputLabel  htmlFor='email' 
                color='secondary' 
                style={{ flexBasis: '100%', color: '#000' }}
                required
            >
                Email
            </InputLabel>

            <div                     
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                        flexWrap: 'wrap', fontSize: "1em", flexBasis: '35%' }}
            
            >
                <input
                    style={{ flex: '0 1 450px', height: '30px', outline: 'none', border: 'none', 
                            borderBottom: status === "error" ? '1px solid red' : '1px solid #000',
                            backgroundColor: status === "error" ? '#ff9f9f' : '#fff'
                            }}
                    type="email"
                    placeholder="Your email"
                    onChange={(event) => setEmail(event?.target?.value ?? '')}
                    onKeyUp={(event) => handleInputKeyEvent(event)}
                />
            </div>

            <button 
                className={classes.btn}
                style={{ flexBasis: '45%', margin: '0' }}
                onClick={e => submit(e)}
            >
                Join
            </button>

            
            {status === "success" && (
                <div
                    style={{ color: "#000", margin: '10px 0 0' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

      </div>
    );
};

  
export default function Footer() {
    const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL
    const [allValues, setAllValues] = React.useState({
        name: '',
        surname: '',
        email: '',
        subject: '',
        message: ''
    })

    const resetedValues = {
        name: '',
        surname: '',
        email: '',
        subject: '',
        message: ''
    }

    const classes = useStyles()

    const handleChange = e =>{
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = e =>{
        e.preventDefault()
        
        userSendEmail(allValues)
        setAllValues(resetedValues)
        e.target.reset()
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

                        <MailchimpSubscribe 
                            url={MAILCHIMP_URL} 
                            render={({ subscribe, status, message }) => (
                                <CustomForm
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                            )}
                        />

                    </div>
                    
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
                    onSubmit={handleSubmitForm}
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
                        <InputLabel  htmlFor='mail' className={classes.labels} 
                            color='secondary' required
                        >
                            Email
                        </InputLabel>

                        <InputBase  type='email' id='email' name='email'  
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
