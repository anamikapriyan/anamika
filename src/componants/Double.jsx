import { TextField, Typography } from '@mui/material'
import React from 'react'

const Double = () => {
    var [Inputname, setInputname] = useState({
        fname: "",
        lname: ''
    })
    const inputHandler = (e) => {
        const {name, value} = e.target
        setInputname({...Inputname,[name]: value })
    }
  return (
    <div>
      <Typography>First name is {Inputname.fname}</Typography><br/>
      <TextField label='First name' variant='outlined' name='fname' value={Inputname.fname} onChange={inputHandler}/>
      <br></br>
      <Typography>First name is {Inputname.lname}</Typography><br/>
      <TextField label='Second name' name='lname' value={Inputname.lname} onChange={inputHandler} variant='outlined'></TextField>

    </div>
  )
}

export default Double
