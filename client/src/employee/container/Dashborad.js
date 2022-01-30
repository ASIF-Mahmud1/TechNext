
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React, {useState, useEffect} from 'react'
  import {Navigate as Redirect} from 'react-router-dom'
  import {Button,Typography,TextField,Card,CardActions,CardContent,Icon,} from '@mui/material';
  import {makeStyles}  from '@mui/styles';
  
  
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    title: {
      margin: theme.spacing(2),
      color: theme.palette.protectedTitle
    },
    error: {
      verticalAlign: 'middle'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    }
  }))
  
  export default function Dashboard() {
  
    const classes = useStyles()
  
  
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              Welcome To the Application!
            </Typography>
            
  
          <CardActions style={{ paddingLeft:120}}>
           <Link to="/addEmployee">
            <Button color="primary" variant="contained" >
              <Typography>Add New Employee</Typography>
            </Button>
          </Link>
          <Link to="/employee">
            <Button color="primary" variant="contained" >
              <Typography>Show List of Employee</Typography>
            </Button>
          </Link>
          <Link to="/sendEmail">
            <Button color="primary" variant="contained" >
              <Typography>Send Emails</Typography>
            </Button>
          </Link>
          <Link to="/searchEmployee">
            <Button color="primary" variant="contained" >
              <Typography>Search Employee</Typography>
            </Button>
          </Link>
           </CardActions>
          </CardContent>
        </Card>
      )
  }
  
  
  