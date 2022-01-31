
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React, {useState, useEffect} from 'react'
  import {Navigate as Redirect} from 'react-router-dom'
  import {Button,Typography,TextField,Card,CardActions,CardContent,Icon,Grid} from '@mui/material';
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
  
  export default function Dashboard() {
  
    const classes = useStyles()
  
  
      return (
       
        <Card className={classes.card}>
          <CardContent >
            <Typography variant="h6" className={classes.title}>
              Welcome To the Application!
            </Typography>
            
            <Grid container spacing={2}>
            <Grid item xs= {12}  className={classes.gridItem} >  
              <Link to="/addEmployee">
              <Button color="primary" variant="contained" >
                <Typography>Add New Employee</Typography>
              </Button>
            </Link>
            </Grid>

            <Grid item xs= {12}  className={classes.gridItem}>  
                <Link to="/employee">
                <Button color="primary" variant="contained" >
                  <Typography>Show List of Employee</Typography>
                </Button>
              </Link>
            </Grid>

            <Grid item xs= {12}  className={classes.gridItem}>  
              <Link to="/sendEmail">
              <Button color="primary" variant="contained" >
                <Typography>Send Emails</Typography>
              </Button>
            </Link>
            </Grid>

            <Grid item xs= {12}  className={classes.gridItem}>  
                <Link to="/searchEmployee">
                <Button color="primary" variant="contained" >
                  <Typography>Search Employee</Typography>
                </Button>
              </Link>
            </Grid>
            </Grid>
          </CardContent>
        </Card>
       
      )
  }
  
  
  /*  
      gridItem:{
      marginBottom:20
    }



     <Grid container spacing={2}>  
     
     </Grid>


    <Grid item xs= {12}  className={classes.gridItem}>  

     </Grid>
  
  */