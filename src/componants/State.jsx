import { Typography,Button } from '@mui/material'
import React, { useState } from 'react'


const State = () => {
    var [page,setpage] = useState("")    
    const pagec =()=> {
        setpage("Home Page  ")
    }   
    const paged = ()=>{
        setpage("Gallary page  ")
    }
    const pagee =()=>{
        setpage("Contact page")
    }
  return (
    <div>
      <Button variant='contained' color='primary' onClick={pagec}>Home Page</Button>
      var [Inputname, setInputname] = useState
        fname: "",
        lname: ''
      <Button variant='contained' color='success' onClick={pagee}>Contact Page</Button>
    <Typography>Welcome to {page}</Typography>
    </div>
  
  )}

export default State
