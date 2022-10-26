import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { red } from '@mui/material/colors';

export default class ShowAllRoutes extends React.Component {
  
   constructor()
   {
    super();
    this.state={
      routes:[]
    }
   }
   componentDidMount()
   {
       axios.get("http://localhost:5163/api/ApplicationOwner/ShowAllRoutes").then(r=>
       {      
       console.log(r.data);
       this.setState({routes:r.data});

      })
   }
  render()
{
    return (
        <Paper sx={{ width: '50%' }} className="paper" >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" }} className="tableheader" align="center" colSpan={3}><b>Routes</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.routes.map(x=>
                      <TableRow>
                      <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.fromCity}
                  </TableCell>
                 </TableRow>, 
                      )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

    )
}
}
