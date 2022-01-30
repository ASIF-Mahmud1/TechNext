import React, {useState} from 'react'
//import {create} from './api-user.js'
import {Button,Typography,TextField,Card,CardActions,CardContent,Icon} from '@mui/material';
import {makeStyles}  from '@mui/styles';
import {validateEmail}from '../../helper/helper'

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

export default function Signup() {
 
  const classes = useStyles()
  const [values, setValues] = useState({
    firstName: '',
    lastName:"",
    email: '',
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const user = {
      firstName: values.firstName || undefined,
      lastName: values.lastName || undefined,
      email: values.email || undefined
    }
    console.log(user);

    // create(user).then((data) => {
    //   if (data.error) {
    //     setValues({ ...values, error: data.error})
    //   } else {
    //     //setValues({ ...values, error: '', open: true})
    //     console.log(data);
    //   }
    // })
  }
   
  const enableSubmit= values.firstName &&values.firstName && values.email && validateEmail(values.email)
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Fillup Form
          </Typography>
          <TextField id="firstName" label="First Name" className={classes.textField} value={values.firstName} onChange={handleChange('firstName')} margin="normal"/><br/>
          <TextField id="lastName" label="Last Name" label="Email" className={classes.textField} value={values.lastName} onChange={handleChange('lastName')} margin="normal"/><br/>
          <TextField id="email"  label="email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button disabled={!enableSubmit} color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>

    </div>
    )
}