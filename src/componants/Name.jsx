import { Typography,TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [fname,setName] = useState("")

const changename=(event)=>{
    const {name,value}=event.target;
    setName(value);
} ;
useEffect(()=>{
    setName("[Enter name]")
}, [])   
  return (
    <div>
      <Typography variant='h1'>I'M {fname}</Typography>
      <br>
      </br>
      <TextField label="Enter name" onChange={(e) => changename(e)} />
    </div>
  )
};

export default Name
