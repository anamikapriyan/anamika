import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablename = () => {
    var pname =[{name:"Aswin",age:19,place:"Guruvayoor"},
{name:"Anjith",age:99,place:"Mathilakam"},
{name:"Anagha",age:50,place:"Irinjalakuda"}]
  return (
    <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
             <TableCell>Name</TableCell>
             <TableCell>Age</TableCell>
             <TableCell>Place</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {pname.map((value,index)=>{
                return <TableRow>
                    <TableCell key={index}>{value.name}</TableCell>
                    <TableCell key={index}>{value.age}</TableCell>
                    <TableCell key={index}>{value.place}</TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
    </TableContainer>
    
      

  )
}

export default Tablename