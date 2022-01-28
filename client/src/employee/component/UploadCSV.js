import React, {useState,useContext} from 'react'
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
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
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

export default function Signin(props) {

  const classes = useStyles()
 
  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Sign In
          </Typography>
 
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained"  className={classes.submit}>Upload CSV file</Button>
        </CardActions>
      </Card>
    )
}

