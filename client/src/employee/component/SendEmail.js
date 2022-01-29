import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Button,Typography,TextField,Card,CardActions,CardContent,  Checkbox, Icon,ListItem, ListItemSecondaryAction, List,IconButton,ListItemText,ListItemAvatar, Paper} from '@mui/material';
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

export default function Signup() {

  const classes = useStyles()
  const [values, setValues] = useState({
    subject: '',
    body: '',
    error: ''
  })

  const  [users, setUsers]=useState([])
  const [selectedUsers, setSelectedUsers]= useState([])
  useEffect(()=>{
    const user=[{name:"Asif",email:"asif@gmail.com"},{name:"Legend",email: 'legend@gmail.com'}]

   // make api call to get list os users
   setUsers(user)
  },[])
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
      const result= users.filter((item)=> item.checked===true)
      console.log("Send to server ",result);
  }


      const handleAdd = (newTag) => {
        const result=  users.map((item)=>{ 
            if(newTag.email===item.email)
            {
                if(item.checked===true)
                {
                    return {...item, checked:false}
                }
                else 
                {
                    return {...item, checked:true}
                }
            }
            else 
            {
                return item
            }
         
          })
       setUsers([...result])
    }



    return (<Paper>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Send Email to Employee
          </Typography>
          <TextField id="subject" placeholder="Subject" className={classes.textField} value={values.name} onChange={handleChange('subject')} margin="normal"/><br/>
          <TextField id="body"  placeholder='Body' className={classes.textField} value={values.email} onChange={handleChange('body')} margin="normal"/><br/>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>

      <List dense className={classes.card} style={{maxWidth: 1000,}}>
      <Typography  variant="h6" className={classes.title}>Employee List</Typography>

         {users.map((item, i) => {
          return <ListItem button onClick={()=>handleAdd(item)}>
                      <ListItemAvatar>
                      
                      </ListItemAvatar>
                      <IconButton>
                          {/* {
                              item.checked ?<Typography> Already Selected</Typography> :<Typography>Select me{ item.checked}</Typography>
                          } */}
                         <Checkbox  />
                      </IconButton>
                      <ListItemText primary={item.name}/>
                      <ListItemSecondaryAction>
                     
                      </ListItemSecondaryAction>
                    </ListItem>
                 
               })
             }
        </List>
    </Paper>
    )
}