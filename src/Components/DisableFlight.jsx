import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import AdminMenu from './AdminMenu';
import ReactDOM from "react-dom/client";
import { Button, FormControl, FormControlLabel, Input, InputLabel, MenuItem, RadioGroup, Select, Radio, FormGroup, FormLabel } from "@mui/material";

export default class DisableFlight extends React.Component {
  
   constructor()
   {
    super();
    this.state={
      email: sessionStorage.getItem("EM"),
      flights:[],
      fid:''
    }
   }
   getData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
   }
   componentDidMount()
   {
       axios.get("http://localhost:5163/api/Admin/GetAllFlightsOfAdmin/"+this.state.email).then(r=>
       {      
       console.log(r.data);
       this.setState({flights:r.data});

      })
   }
   FlightDisable= (e) => {
    e.preventDefault();
      let fid = this.state.fid;
      const root=ReactDOM.createRoot(document.getElementById("root"));
      axios.put("http://localhost:5163/api/Admin/DisableFlight/"+this.state.fid).then(r=>{
          if(r.data)
          {
              alert("Flight Status Changed");
              root.render(<AdminMenu/>
              )
          }
          else{
              alert("Flight Does not Exist");
          }
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
          <div className="form" style={{backgroundColor: "#daf7de"}}>
          <form onSubmit={this.FlightDisable}>
                    <FormControl required fullWidth margin="normal">
                        <InputLabel htmlFor="fid" className="labels">Flight Id</InputLabel>
                        <Input className="inputs" name="fid" type="number" disableUnderline={true} onChange={this.getData}/>
                    </FormControl>
                    <Button
                    disableRipple
                    fullWidth
                    variant="text"
                    type="submit"
                    className="btn">Disable Flight</Button>
                </form>
          </div>
        </Paper>

    )
}
}
