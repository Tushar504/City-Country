import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postData } from '../redux/action';
export const Navbar=()=>{
    const disptach=useDispatch()
    const [text,setText]=useState({
        city:"",
        country:"",
        population:""
    })
    const update=(target)=>{
       setText({
           ...text,
           [target.name]:target.value
       })
    }
    return (
        <div style={{width:"800px",display:"flex",justifyContent:"space-between",margin:"20px"}}>
              <TextField onChange={(e)=>update(e.target)} name='city' id="outlined-basic" label="City" variant="outlined" />
              <TextField onChange={(e)=>update(e.target)} name='country' id="outlined-basic" label="Country" variant="outlined" />
              <TextField onChange={(e)=>update(e.target)} name='population' id="outlined-basic" label="Population" variant="outlined" />
              <Button onClick={(e)=>disptach(postData(text))} variant="contained">ADD City</Button>
        </div>
    )
}