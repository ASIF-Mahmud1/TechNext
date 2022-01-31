import React, {useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button,Typography} from '@mui/material'
import {paginateList} from '../api-users'


export default function BasicTable() {
  const [rows,setRows]= useState([])
const [pageNumber,setPageNumber]= useState(1)
const [showNextButton,setShowNextButton]= useState(false)

useEffect(()=>{
 paginateList(pageNumber).then((data) => {
  if (data.error) {
    console.log("error ",data.error);
    alert(data.error)
  //  setValues({ ...values, error: data.error})
  } else {
     setRows(data.users)
     setShowNextButton(data.showNextButton)
    console.log(data);
  }
})
},[pageNumber])

 const clickNextBtn=(value)=>{
  setPageNumber((current)=> current+value)
 }
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Serial No.</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userid}
              </TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
        <Button disabled={pageNumber===1} onClick={()=>clickNextBtn(-1)}>
            <Typography variant="contained">Previous</Typography>
        </Button>
        <Button disabled={!showNextButton} onClick={()=>clickNextBtn(1)}>
            <Typography variant="contained">Next</Typography>
        </Button>    
       
     
    </TableContainer>
  );
}