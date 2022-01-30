import React, {useState,useEffect} from 'react'
import {makeStyles}  from '@mui/styles';
import {Button,Typography,TextField,Card,CardActions,CardContent,MenuItem,  Checkbox, Icon,ListItem, ListItemSecondaryAction, List,IconButton,ListItemText,ListItemAvatar, Paper} from '@mui/material';
import {searchUser} from '../api-users'

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
    const categories= [{title:"firstname",label:"First Name"},{title:"lastname",label:"Last Name"},{title:"email",label:"Email"}]
    const [category, setCategory] = React.useState('');
    const [query,setQuery]=React.useState('')   
    const  [users, setUsers]=useState([])
    const [showList,setShowList]= useState(false)

    const clickSubmit = async() => {
        const body= {
         [category]: query
        }
        console.log(body)

        searchUser(body).then((data) => {
          if (data.error) {
            console.log("error ",data.error);
          //  setValues({ ...values, error: data.error})
          } else {
            //setUsers(data.users)
            console.log("result ",data);
            setUsers(data)
            setShowList(true)
      
          }
        })
    }

    const handleChange =event => {
        
        setQuery( event.target.value.trim() )
    }

    const handleSetCategory = (e) => {
        setCategory(e.target.value)

    }

  return ( <Paper>      
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
                          {option.label}
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

      <List dense className={classes.card} style={{maxWidth: 1000,}}>
      {
        showList && <Typography  variant="h6" className={classes.title}>Match Found: {users.length} </Typography>
      }

         {users.map((item, i) => {
          return <ListItem button key= {item.userid}>
                      <ListItemAvatar>
                      
                      </ListItemAvatar>
                      <IconButton>
                         {i+1}{"."}
                      </IconButton>
                      <ListItemText primary={item.firstname+" "+ item.lastname} secondary={item.email}/>
                      <ListItemSecondaryAction>
                     
                      </ListItemSecondaryAction>
                    </ListItem>
                 
               })
             }
        </List>
      </Paper>
    )
}
