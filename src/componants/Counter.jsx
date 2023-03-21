
import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
    var [cnt, setCnt] = useState(0);
    const increment = () => {
        setCnt(++cnt);
    }
    const decrement = () =>{
        setCnt(--cnt);
    }
  return (
   <div>
    <Typography variant='h1'>{cnt}</Typography>
<Button variant='contained' onClick={decrement}>-</Button> <br></br>
<br></br>
<Button variant='contained' onClick={increment}>+</Button> <br></br>
   </div>
      
  )
}

export default Counter
