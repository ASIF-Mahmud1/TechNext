
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React, {useState, useEffect} from 'react'
  import {Navigate as Redirect} from 'react-router-dom'
  import {Button,Typography,Grid,TextField,Card,CardActions,CardContent,Icon,} from '@mui/material';
  import {makeStyles}  from '@mui/styles';
  
  
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 1000,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    title: {
      margin: theme.spacing(2),
      color: theme.palette.protectedTitle
    },
    gridItem:{
      marginBottom:20
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
                  
                  <Grid container spacing={2}>  
                  <Grid item xs= {12}  className={classes.gridItem}>  
                    <Link to="/form">
                    <Button color="primary" variant="contained" >
                      <Typography>Fillup Form </Typography>
                    </Button>
                  </Link>
                  </Grid>

                  <Grid item xs= {12}  className={classes.gridItem}>  
                    <Link to="/byCsv">
                    <Button color="primary" variant="contained" >
                      <Typography>Upload List of Employee by CSV</Typography>
                    </Button>
                  </Link>
                 </Grid>
                 </Grid>
       
                <CardActions >
               
              
                </CardActions>
                </CardContent>
              </Card>
      
      )
  }
  
  
  