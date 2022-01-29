import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button,Typography} from '@mui/material'

function createData( firstName, lastName, email ) {
  return {  firstName, lastName, email  };
}

const rows = [
  createData( "Asif", "Mahmud","asif@gamil.com" ),
  createData( "Sushi", "Kao","sushi@gamil.com" ), 
  createData( "Mushi", "Mao","mushi@gamil.com" ),
  createData( "Harry", "Potter","potter@gamil.com" ),
  createData( "Batman", "Dark Knight","batman@gamil.com" ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Serial No.</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name&nbsp;(g)</TableCell>
            <TableCell align="right">Email&nbsp;(g)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
        <Button>
            <Typography variant="contained">Previous</Typography>
        </Button>
        <Button>
            <Typography variant="contained">Next</Typography>
        </Button>    
       
     
    </TableContainer>
  );
}