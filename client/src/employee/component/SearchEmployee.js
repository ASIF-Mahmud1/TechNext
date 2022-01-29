import React, {useState,useEffect} from 'react'
import {makeStyles}  from '@mui/styles';
import {Button,Typography,TextField,Card,CardActions,CardContent,MenuItem,  Checkbox, Icon,ListItem, ListItemSecondaryAction, List,IconButton,ListItemText,ListItemAvatar, Paper} from '@mui/material';

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
    marginBottom:20,
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

export default function CreateSubCategory() {
    const classes = useStyles()
    const categories= [{title:"firstName"},{title:"lastName"},{title:"email"}]
    const [category, setCategory] = React.useState('');
    const [query,setQuery]=React.useState('')   

    const clickSubmit = async() => {
        const body= {
         [category]: query
        }
        console.log(body)
    //    const response= await create("subCategory",{ t: jwt.token },body) // create subCategory
    //    if(!response.error)
    //    {
    //        console.log(response)
    //    }
    //    else
    //    {
    //        console.log("Something went wrong on creating Sub-Category ",response)   // Handle error
    //    }
    }

    const handleChange =event => {
        
        setQuery( event.target.value.trim() )
    }

    const handleSetCategory = (e) => {
        setCategory(e.target.value)

    }

  return (
      <Card className={classes.card}>
          <CardContent>
              <Typography variant="h6" className={classes.title}>
                 Search Employee
              </Typography>
              <TextField
                  className={classes.textField}
                  id="outlined-select-currency"
                  select
                  label="Select Criteria"
                  value={category}
                  onChange={handleSetCategory}
              >
                  {categories.map((option) => (
                      <MenuItem key={option.title} value={option.title}>
                          {option.title}
                      </MenuItem>
                  ))}
              </TextField>

              <TextField label="Enter Your Query " className={classes.textField} value={query} onChange={handleChange} margin="normal" /><br />
              <br /> 

          </CardContent>
        <CardActions>
          <Button disabled={category===''|| query===''} color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
    )
}
