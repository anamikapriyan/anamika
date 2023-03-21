import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setfname] = useState("Aswin")
    const changeName =()=>{
        setfname("Anjith negative ")
    }
  return (
    <div>
      <Typography>Welcome {fname}</Typography>
      <br>
      </br>
      var [Inputname, setInputname] = useState
        fname: "",
        lname: ''
    </div>
  )
}

export default StateBasics
