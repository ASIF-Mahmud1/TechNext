import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Button,Typography,TextField,Card,CardActions,CardContent,  Checkbox, Icon,ListItem, ListItemSecondaryAction, List,IconButton,ListItemText,ListItemAvatar, Paper} from '@mui/material';
import {makeStyles}  from '@mui/styles';
import {list,sendEmail} from '../api-users'

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
  useEffect(()=>{

   list().then((data) => {
    if (data.error) {
      console.log("error ",data.error);
    //  setValues({ ...values, error: data.error})
    } else {
      setUsers(data.users)

    }
  })
  },[])
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
      const emails= users.filter((item)=> item.checked===true).map((item)=>item.email)
      const result={
        emails: emails,
        subject: values.subject,
        body: values.body
      }
      console.log("Send to server ",result);
      sendEmail(result).then((data) => {
        if (data.error) {
          console.log("error ",data.error);
        //  setValues({ ...values, error: data.error})
        } else {
          //setUsers(data.users)
          console.log("result ",data);
    
        }
      })
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

    const enableBtn= users.filter((item)=> item.checked===true).length>0 && values.subject && values.body

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
          <Button disabled={!enableBtn} color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Send Email</Button>
        </CardActions>
      </Card>

      <List dense className={classes.card} style={{maxWidth: 1000,}}>
      <Typography  variant="h6" className={classes.title}>Employee List</Typography>

         {users.map((item, i) => {
          return <ListItem button onClick={()=>handleAdd(item)}>
                      <ListItemAvatar>
                      
                      </ListItemAvatar>
                      <IconButton>
                         <Checkbox  />
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