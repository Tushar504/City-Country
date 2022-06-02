import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector,useDispatch } from 'react-redux';
import { getData,Delete} from '../redux/action';
import { useEffect } from 'react';
import {BasicModal} from "./editmodal"
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



export const Tablecreated=()=>{
   const dispatch=useDispatch()
   const data=useSelector(store=>store.data)
  
   useEffect(()=>{
       dispatch(getData())
         
   },[])




    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>ID</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Population</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((e) => (
              <StyledTableRow key={e.id}>
             <StyledTableCell align='center'>{e.id}</StyledTableCell>
              <StyledTableCell align="center">{e.country}</StyledTableCell>
              <StyledTableCell align="center">{e.city}</StyledTableCell>
              <StyledTableCell align="center">{e.population}</StyledTableCell>
              <StyledTableCell align="center"><BasicModal data={e}/></StyledTableCell>
              <StyledTableCell align="center"><Button onClick={()=>dispatch(Delete(e.id))} variant="contained">Delete</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }