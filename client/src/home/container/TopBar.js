import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link ,Navigate as Redirect} from "react-router-dom";
import React, { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home'

export const LogContext= React.createContext()

export default function ButtonAppBar({children}) {
   

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR Managment System
          </Typography>
          <Link to="/">
            <IconButton aria-label="Home" style={{color:'white'}} >
               <HomeIcon/>
            </IconButton>
          </Link>
         
        </Toolbar>
      </AppBar>
      {children}
    </Box>
   
  );
}