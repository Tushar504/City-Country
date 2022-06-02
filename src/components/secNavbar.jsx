import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Filter } from '../redux/action';
import { useDispatch } from 'react-redux';
import { sorth,sortl } from '../redux/action';
export const Nav2=()=>{
    const [value,setValue]=useState("All")
    const dispatch=useDispatch()
    const sorting=(value)=>{
      if(value==="High"){
          return dispatch(sorth("population"))
      }
      else if(value==="Low"){
          return dispatch(sortl("population"))
      }
    }
    return (
        <div style={{margin:"20px" ,width:"500px",display:'flex',justifyContent:"space-between"}}>
         
         <TextField  name='country' onChange={(e)=>setValue(e.target.value)}  value={value}  id="outlined-basic" label="Filter By Country Name" variant="outlined" />
         <Button onClick={()=>dispatch(Filter(value))}  variant="contained">Filter</Button>
         <select onChange={(e)=>sorting(e.target.value)} >
             <option value="">Sort By Population</option>
             <option value="High">High-Low</option>
             <option value="Low">Low-High</option>
         </select>
        </div>
    )
}