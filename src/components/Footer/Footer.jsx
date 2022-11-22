import React from 'react'
import "./Footer.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    fillfooter:{
        fill:'white !important'
    }
})
const Footer = () => {
    const classes=useStyles();
    return (
        <div className="footer">
            <h5>COPYRIGHT © 2021 MERCANTILISM SERVICES LLP - ALL RIGHTS RESERVED.</h5>
            <div className='footer__socialicon'>
                <IconButton >
                    <FacebookRoundedIcon className={classes.fillfooter} fontSize="large" />
                </IconButton>
                <IconButton>
                    <TwitterIcon className={classes.fillfooter}  fontSize="large" />
                </IconButton>
                <IconButton>
                    <YouTubeIcon className={classes.fillfooter} fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default Footer
