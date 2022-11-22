import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import { Drawer } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { List } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Divider } from '@mui/material';
import { basic,account } from './DrawerItem';
import CloseIcon from '@mui/icons-material/Close';

const useStyles=makeStyles((theme)=> {
    return{
        drawerCloser:{
            float:'right'
        },
        draweritem:{
            color:'#aaa',
            '&:hover':{
                color:'white'
            }
        },

        headerdrawer:{
            
            display:'block !important',
            
        },
        iconhover:{
            color: '#a3a7a9',
            '&:hover': {
               fill:'#b3755e !important',
             },
        },
        
        drawer:{
            
            '& .MuiDrawer-paper': {
                width: '240px',
                boxSizing: 'border-box',
                backgroundColor:'#333333 !important',
              },
        },
        ['@media only screen and (min-width: 992px)']:{
            headerdrawer:{
                display:'none !important',
            }
        }
    }
    
  })

const Header = () => {
    const classes=useStyles();
    const [open,setOpen]=useState(false)
    return (
        <div className="header">
        <IconButton className={classes.headerdrawer} onClick={()=>setOpen(true)}>
            <MenuIcon fontSize='large' className={classes.iconhover} />
        </IconButton>
        <Drawer
        variant='temporary'
        open={open}
        onClose={()=>setOpen(false)}
        className={classes.drawer}
        >
        <div className='spacer'>
            <IconButton onClick={()=>setOpen(false)} className={classes.drawerCloser}>
                <CloseIcon className={classes.draweritem} fontSize="large" />
            </IconButton>
        </div>
        <Divider />
        <List>
          {basic.map((bas,index)=>(
            <ListItem key={index} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
              <ShoppingCartOutlinedIcon />
              </ListItemIcon> */}
              <ListItemText className={classes.draweritem} primary={bas.name} />
            </ListItemButton>
          </ListItem>
          ))}
          <Divider />
          <h4 className="drawerItemAccount">Account</h4>
          {account.map((acc,index)=>(
            <ListItem key={index} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
              <ShoppingCartOutlinedIcon />
              </ListItemIcon> */}
              <ListItemText className={classes.draweritem} primary={acc.name} />
            </ListItemButton>
          </ListItem>
          ))}
        </List>
        </Drawer>
        <a href="#"><h1>Mercantilism Services LLP</h1></a>   
        <div className="header__navmenu">
            <a href="#" className="header__navitems">
                Home
            </a>
            <a href="#" className="header__navitems">
                Contact Us
            </a>
            <a href="#" className="header__navitems">
                Blog
            </a>
           
        </div> 
        <div className="header__icons">
                <IconButton>
                  <ShoppingCartOutlinedIcon className={classes.iconhover} />
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlinedIcon className={classes.iconhover} />
                </IconButton>
        </div>
        </div>
    )
}

export default Header
