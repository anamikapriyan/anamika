import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState  } from 'react'

const Validation = () => {
    const [submitted,setSubmitted] = useState(false)
    var [Inputname, setInputname] = useState({
        fname: "",
        lname: '',
    });
    var [validation, setValidation] = useState({
        fname: "",
        lname: '',
    });
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname, [name]: value });
    };
    const checkvalidation = () => {
        let errors = Validation;
        if (!Inputname.fname.trim()) {
            errors.fname = "First name is requierd";

        } else {
            errors.fname = "";
        }
    
    setValidation(errors);
};
useEffect(()=>{
    checkvalidation()
});
const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
 };

return (
    <div>
        <form id='Input' onSubmit={handleSubmit}>
            <Typography >Name is {Inputname.fname}</Typography> 
            <TextField label="First Name" variant="outlined" name="fname" value={Inputname.fname}
                onChange={inputHandler}/>
                <br></br>
            {(validation.fname && submitted) && <p>{validation.fname}</p>}
            <Button type='submit' variant="outlined">save</Button>
            <br></br>
            <br></br>
        </form>
    </div>
);
};

export default Validation
