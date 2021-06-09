import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue, blueGrey } from '@material-ui/core/colors';



  

  const MyTable = () => {

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
       
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.common.black,
          },
        },
      }))(TableRow);
      

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        head: {
            backgroundColor: blueGrey,
            
          },
      });
      
      function createData(activity, time, energy, work_break, gathering) {
        return { activity, time, energy, work_break, gathering };
      }
      
      const rows = [
        createData('Android', 159, 6.0, 24, 4.0),
        createData('Graphics', 237, 9.0, 37, 4.3),
        createData('Producer', 262, 16.0, 24, 6.0),
        createData('Actor', 305, 3.7, 67, 4.3),
        createData('Player', 356, 16.0, 49, 3.9),
      ];
      
      
      

    const classes = useStyles();
      return ( 

        <TableContainer component={Paper} style={{margin:10}}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow >
              <StyledTableCell>Activity</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right">Energy</StyledTableCell>
              <StyledTableCell align="right">Work_break</StyledTableCell>
              <StyledTableCell align="right">Ghathering</StyledTableCell>
             
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.activity}>
                <TableCell component="th" scope="row">
                  {row.activity}
                </TableCell>
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                <TableCell align="right">{row.energy}</TableCell>
                <TableCell align="right">{row.work_break}</TableCell>
                <TableCell align="right">{row.gathering}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

       );
  }
   
  export default MyTable;

