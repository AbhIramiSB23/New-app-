import React, { useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const [users,setUsers]=useState([]);
  const navigate=useNavigate()
    useEffect(()=>{
      axios.get('http://localhost:4000/users').then((res)=>{
          setUsers(res.data);

      })
    },[])
    // fn to call backend API for deletion
    let deleteUser=(id)=>{
      axios.delete('http://localhost:4000/userremoval/'+id).then((res)=>{
        window.location.reload();//to rerload the current page
      }).catch((error)=>{
        console.log(error)
      })
    }
    //fn to call to call the backend API
    let updateUser=(user)=>{
      navigate('/add',{state:{user}})
    }
  return (
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              

              <TableCell align="right"><Button variant="contained" onClick={()=>{
                updateUser(row)
              }} color="success">
                EDIT</Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={()=>{
                deleteUser(row._id)
              }} color="error">
              DELETE
              </Button></TableCell>
                
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
  )
}


export default Home
