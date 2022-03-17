import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosAction } from "../store/actions/todosAction";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Todos=()=>{

    const todos=useSelector(store=>store.todos)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(todosAction())
    },[])
 console.log(todos)
    return(
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="right">userId</TableCell>
              <TableCell align="right">id(g)</TableCell>
              <TableCell align="right">title</TableCell>
              <TableCell align="right">Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.userId}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{`${row.completed}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
    )
}
export default Todos;