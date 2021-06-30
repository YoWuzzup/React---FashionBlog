import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { pic01, pic02, pic03, pic04, pic05, pic06, pic07, 
         pic08, pic09, pic10, pic11, pic12 } 
    from '../../Images'

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#f3f1ea',
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 0 200px 0'
    },
    header:{
        margin: '95px 0 40px',
        fontSize: '36px',
        fontWeight: '600',
    },
    content:{
        width: '90%',
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: '1fr 1fr 1fr',
        gap: '2% 3%', 
        gridTemplateAreas: 
        `"pic0 pic1 pic2 pic3 pic3 pic4"
        "pic5 pic5 pic6 pic3 pic3 pic11"
        "pic5 pic5 pic7 pic8 pic9 pic10"`,
        '& > :nth-child(1)':{
            gridArea: 'pic0'
        },
        '& > :nth-child(2)':{
            gridArea: 'pic1'
        },
        '& > :nth-child(3)':{
            gridArea: 'pic2'
        },
        '& > :nth-child(4)':{
            gridArea: 'pic3'
        },
        '& > :nth-child(5)':{
            gridArea: 'pic4'
        },
        '& > :nth-child(6)':{
            gridArea: 'pic5'
        },
        '& > :nth-child(7)':{
            gridArea: 'pic6'
        },
        '& > :nth-child(8)':{
            gridArea: 'pic7'
        },
        '& > :nth-child(9)':{
            gridArea: 'pic8'
        },
        '& > :nth-child(10)':{
            gridArea: 'pic9'
        },
        '& > :nth-child(11)':{
            gridArea: 'pic10'
        },
        '& > :nth-child(12)':{
            gridArea: 'pic11'
        },
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexFlow: 'column',
            '& > *':{
                margin: '10px 0'
            }
        }
    },
    image:{
        width: '100%',
        height: 'inherit'
    }
}))

export default function Follow() {
    const classes = useStyles()
    const imgArray = [
        pic01, pic02, pic03, pic04, pic05, pic06, pic07, 
        pic08, pic09, pic10, pic11, pic12
    ]
    
    return (
        <div className={classes.root} >
            <Typography variant="h4" className={classes.header} >
                Follow Me
            </Typography>

            <div 
                className={classes.content}
            >
                {imgArray && imgArray.map((item,index)=>{
                    return(
                        <img 
                            alt={`number ${index}`} src={`${item}`} 
                            className={`${classes.image}`} 
                            key={`${item}_${index}`}
                        />
                )})}
            </div>

        </div>
    )
}
