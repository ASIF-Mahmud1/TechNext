
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
  
  export default function AddNewEmployee() {
  
    const classes = useStyles()
  
  
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              Welcome To the Application!
            </Typography>
            
  
          <CardActions style={{ paddingLeft:120}}>
           <Link to="/form">
            <Button color="primary" variant="contained" >
              <Typography>Fillup Form </Typography>
            </Button>
          </Link>
          <Link to="/byCsv">
            <Button color="primary" variant="contained" >
              <Typography>Upload List of Employee by CSV</Typography>
            </Button>
          </Link>
           </CardActions>
          </CardContent>
        </Card>
      )
  }
  
  
  