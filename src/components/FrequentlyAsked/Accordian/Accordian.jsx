import React from 'react'
import './Accordian.css'

import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { Divider } from '@mui/material';
const useStyles=makeStyles({
    Accmargin:{
        margin: ' auto 10rem !important',
    },
    question:{
        fontSize:'22px !important',
        color: 'rgb(27, 27, 27) !important',
        fontWeight:'400 !important',
        
        '&:hover':{
            color:'#be615a !important'
        }
    },
    answer:{
        lineHeight: '1.5',
        color: 'rgb(94, 94, 94)',
    },
    ['@media only screen and (max-width: 780px)']:{
      Accmargin:{
        margin: 'auto !important',
           },
      }
})
const Accordian = ({question,answer}) => {
    const classes=useStyles()
    return (
        <Container>
            <Accordion className={classes.Accmargin} elevation='0'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.question}>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.answer}>
           {answer}
          </Typography>
        </AccordionDetails>
        <Divider />
      </Accordion>
     
        </Container>
    )
}

export default Accordian
