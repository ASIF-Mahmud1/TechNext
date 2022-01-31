import React, {useState,useContext} from 'react'
import {Navigate as Redirect} from 'react-router-dom'
import {Button,Typography,TextField,Card,CardActions,CardContent,Icon,} from '@mui/material';
import {makeStyles}  from '@mui/styles';
import { parse } from "papaparse";
import {validateEmail}from '../../helper/helper'
import {multiCreate} from '../api-users'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },

  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  },
  dropZone:{
    width:200,padding:200,
    
    backgroundColor:'grey'
  },
  dropZoneHighlight:{
    width:200,padding:200,
    opacity: 0.3,
    
    backgroundColor:'green'
  },

}))

export default function Signin(props) {

  const [highlighted, setHighlighted] = React.useState(false);
  const [contacts, setContacts] = React.useState([
   
  ]);
  const [totalRows, setRows]= React.useState(0)
  const [validRows, setValidRows]= React.useState(0)
  //console.log("my contacts ",contacts);
  const classes = useStyles()

 const handleFileUpload=(e)=>{
     e.preventDefault();
     setHighlighted(false);

   Array.from(e.dataTransfer.files)
     .filter((file) => file.type === "text/csv")
     .forEach(async (file) => {
       const text = await file.text();
       const result = parse(text, { header: true });
       //////////////////////////////////////////////////////////
       const finalResult= result.data.filter((item)=> item['first name'] && item['last name']&& item.email && validateEmail(item.email.trim()) ).map((item)=> { return {  'firstName': item['first name'],'lastName': item['last name'], 'email' : item['email'].trim() }})
       console.log("my final result ",finalResult);
       ///////////////////////////////////////////////////////////
       setContacts((existing) => [...existing, ...finalResult]);
       setRows(result.data )
       setValidRows(finalResult)
       console.log("Data is ", result);

     });
 }

 const handleSubmit=()=>{
       ///////////////////////////////////////////////////////////
       const body= {
         users: validRows
       }
       multiCreate(body).then((data) => {
        if (data.error) {
          console.log("error ",data.error);
          //setValues({ ...values, error: data.error})
        } else {
          //setValues({ ...values, error: '', open: true})
          console.log(data);
        }
      })
       //////////////////////////////////////////////////////////
 }
  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
           Add Employee Details
          </Typography>
 
        </CardContent>
        <CardActions>
               <div
          className= {highlighted ?classes.dropZoneHighlight: classes.dropZone}
      
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          handleFileUpload(e)
        }}
      >
       <Typography style={{color:"white", fontSize:30}}> DROP HERE</Typography>
      </div>
        </CardActions>
        <CardContent>
          <Typography variant="h6">
            Summary
          </Typography>
          <Typography > Total:{totalRows.length} </Typography>
          <Typography > Valid :{validRows.length} </Typography>
          <Typography > Invalid:{totalRows.length-validRows.length} </Typography>

          <CardActions>
          <Button disabled={validRows===0} color="primary" variant="contained"  className={classes.submit} onClick={handleSubmit} >Submit Details</Button>
        </CardActions>
        </CardContent>
        <CardContent>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <strong>{contact['firstName']}{" "} {contact['lastName']}</strong>: {contact.email}
          </li>
        ))}
      </ul>
        </CardContent>
      </Card>
    )
}
