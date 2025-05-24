import React, { useState,useEffect } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'


const Add = () => {
  const [count,setCount]=useState(0);
  const [form,setForm]=useState({
    productName:'',
    Category:'',
    Price:''
})
let navigate=useNavigate();
  //let incrementCounter=()=>{
    //setCount(count+1)
  //}
  const location=useLocation()
  function valueUpdate(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }
  function submitInfo() {
    if (location.state!=null) {
      axios.put('http://localhost:4000/userupdation/'+location.state.user._id,form).then((res)=> {
        alert('Data updated');
        navigate("/")
      }).catch((error)=>{
        console.log(error);
      })
    } else {
      axios.post('http://localhost:4000/newuser',form).then((res)=> {
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    }

  }
  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        productName:location.state.user.productName,
        Category:location.state.user.Category,
        Price:location.state.user.Price,

      })
    }
  },[]) 

  return (
    <div>
       <TextField id="outlined-basic" 
       label="productName" variant="outlined"
      name="productName" value={form.productName}
      onChange={valueUpdate}/><br/>

      <TextField id="filled-basic" 
      label="category" variant="filled" 
      name="Category" 
      value={form.Category}
      onChange={valueUpdate}/><br/>

      <TextField id="standard-basic" 
      label="price" variant="standard" 
      name="Price" 
      value={form.Price}
      onChange={valueUpdate}/><br/> 

    <Button variant="contained" onClick={submitInfo}>SUBMIT</Button>
    <br/>
    {count}
    </div>

  )
}

export default Add
