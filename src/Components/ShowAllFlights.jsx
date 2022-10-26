import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

export default class ShowAllFlights extends React.Component {
  
   constructor()
   {
    super();
    this.state={
      flights:[]
    }
   }
   componentDidMount()
   {
       axios.get("http://localhost:5163/api/Admin/GetAllFlight").then(r=>{      
       console.log(r.data);
       this.setState({flights:r.data});
      })
   }
  render()
{
    return (
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 440 , marginTop:"5px" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow   >
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"  }} align="center" colSpan={3}>Flight Id</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Company Name</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>From City</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>To City</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Available Seats</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Price</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Status</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Price</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Pickup Time</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Drop Time</TableCell>
                 
                </TableRow>
                <TableRow>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.flights.map(x=>
                      <TableRow>
                      <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.flightId}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.companyName}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.fromCity}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.toCity}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.availableSeats}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.price}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.status.toString().charAt(0).toUpperCase()+x.status.toString().slice(1)}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.price}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.pickTime}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.dropTime}
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
