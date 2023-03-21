import { TextField, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'

const New1 = () => {

    var [fname,setName] = useState("");
    var [sname,setsName] = useState("");
    const changeName =(event) => {
        setName(event.target.value);
    }
    
    const change =(event) => {
        setsName(event.target.value);
    }
    useEffect(()=>{
        setName("Enter Name") 
    }, []) 
  return (
    <div>
      <Typography variant='h2'>Name is {fname}</Typography>  
      <TextField label="First Name" variant='outlined' onChange={changeName} /> <br></br>
      <br></br>
      <Typography variant='h2'>Name is {sname}</Typography>
      <TextField label="Second Name" variant='outlined' onChange={change}/><br></br>
    </div>
  )
}

export default New1

