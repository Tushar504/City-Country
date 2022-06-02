import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Patch } from '../redux/action';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

export function BasicModal({data}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch()
  const [Data,setData]=useState({
    city:data.city,
    country:data.country,
    population:data.population
  })
 
  const Update=(target)=>{
       setData({
         ...Data,
         [target.name]:target.value
       })
      
  }
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Information
          </Typography>
          <Typography variant='div' id="modal-modal-description" sx={{ mt: 2 }}>
            
              <TextField onChange={(e)=>Update(e.target)} name='city' value={Data.city} sx={{marginLeft:2}} margin="dense" id="outlined-basic" label="City" variant="outlined" />
              <TextField onChange={(e)=>Update(e.target)} name='country' value={Data.country} sx={{marginLeft:2}} margin="dense" id="outlined-basic" label="Country" variant="outlined" />
              <TextField onChange={(e)=>Update(e.target)} name='population' value={Data.population} sx={{marginLeft:2}} margin="dense" id="outlined-basic" label="Population" variant="outlined" />
              <Button onClick={()=>{
                    dispatch(Patch(Data,data.id))
                    handleClose()
                    }} sx={{marginLeft:2}} variant="contained">UPDATE</Button>
              
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}