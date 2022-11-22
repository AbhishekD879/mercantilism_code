import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import "./Connect.css";
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    facebook:{
        fill:'#1877f2 !important',
        fontSize:'3rem !important'
    },
    twitter:{
        fill:'#1da1f2 !important',
        fontSize:'3rem !important'
    },
    youtube:{
        fill:'red !important',
        fontSize:'3rem !important'
    }
})
const ConnectWithUs = () => {
    const classes=useStyles();
    return (
        <div className="connect">
                <h1>CONNECT WITH US</h1>
            <div className='connect__socialicon'>
                <IconButton >
                    <FacebookRoundedIcon className={classes.facebook} fontSize="large" />
                </IconButton>
                <IconButton>
                    <TwitterIcon className={classes.twitter} fontSize="large" />
                </IconButton>
                <IconButton>
                    <YouTubeIcon className={classes.youtube} fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default ConnectWithUs
