import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

export default class ShowCustomerBookings extends React.Component {
  
   constructor()
   {
    super();
    this.state={
      email: sessionStorage.getItem("EM"),  
      bookings:[]
    }
   }
   componentDidMount()
   {
       axios.get("http://localhost:5163/api/Customer/ShowCustomerBookings/"+this.state.email).then(r=>
       {      
       console.log(r.data);
       this.setState({bookings:r.data});

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
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"  }} align="center" colSpan={3}>Booking Id</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Flight Id</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Customer Name</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Email Id</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Booked Seats</TableCell>
                 <TableCell sx={{ backgroundColor : "#b0e8f5" , fontWeight : "bold"}} align="center" colSpan={3}>Total Price</TableCell>
                </TableRow>
                <TableRow>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.bookings.map(x=>
                      <TableRow>
                      <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.bookingId}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.flightId}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.customerName}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.emailId}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.bookedSeats}
                  </TableCell>
                  <TableCell sx={{ backgroundColor : "#fff9e0" }} align="center" colSpan={3}>{x.discountedPrice}
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
