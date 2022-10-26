import React from "react";
import { TextField,Box, Typography } from "@mui/material";
import  Button  from "@mui/material/Button";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ReactDOM from "react-dom/client"
import axios from 'axios';
import FlightIcon from '@mui/icons-material/Flight'
import Seat from "./Seats";
const root = ReactDOM.createRoot(document.getElementById('root'));
export default class CustomerBooking extends React.Component{
    constructor(){
        super();
        this.state={
            fcity:'',
            tcity:'',
            flightList : [],
            showFlight : false,
            flightId : ''
        }
        
       
    }
    seat=()=>{
        sessionStorage.setItem("flightID",this.state.flightId);
       root.render(<Seat/>)

    }

    Getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    isvalid=()=>{
        if((this.state.fcity==="") || (this.state.tcity==="")){
            return false
        }
        else{
            return true
        }
    }
    search=(e)=>{
        e.preventDefault();
        alert(this.state.fcity+this.state.tcity);
        axios.get("http://localhost:5163/api/Customer/ShowFlightsByFromAndTo/" + this.state.fcity + 
        "/" + this.state.tcity).then(r => {
            console.log(r.data.length);
            if(r.data.length > 0){
                this.setState({flightList : r.data});
                this.setState({showFlight : true});
                console.log(r.data);
            }
        })
       }
    render(){
        return(
            <>
            <div className="header container-fluid">
                <div className="logo">
                <img src="airlinelogo.png" alt=""  width={130}/>
                <h6 className="flighttext">Flight Booking</h6>
                </div>
                
            </div>
            <Box className="bg"  textAlign={"center"} padding={5}>
            <Box className="flightlogos" width={800} height={50} margin={"auto"} border={"solid 2px black"} marginTop={10} padding={3} sx={{backgroundColor:"transperent"}}>
            <TextField  label="From" variant="outlined" sx={{backgroundColor : "white"}} name="fcity" fullWidth  onInput={this.Getdata}/>
            <FlightIcon/>
            <TextField label="To" variant="outlined" sx={{backgroundColor : "white"}}  name="tcity" fullWidth onInput={this.Getdata}/>
            <div className="space">
                <Button variant="contained" type="submit"  color="warning" sx={{":hover":{backgroundColor:"green"}}} disabled={!this.isvalid()}
                disableRipple onClick={this.search} > Search</Button>
            </div>
            </Box>
            </Box>

            {
                this.state.showFlight ? 
                <>
                <div>
                    {
                        this.state.flightList.map(x =>
                        <div className="ad">
                            <div className="spd">
                                <div className="bd1">
                                    <input type="radio" name="flightId" id="" value={x.flightId} onChange={this.Getdata} />
                                </div>
                                <div className="bd2">
                                    <p>{x.pickTime}<br/>to<br/>{x.dropTime}</p>
                                </div>
                                <div className="bd3">
                                    <h5><FlightIcon/>{x.companyName}</h5>
                                    <p>Boeing 777-300</p>
                                </div>
                                <div className="bd4">
                                    <p>{x.availableSeats}</p>
                                </div>
                                <div className="bd">
                                    <h2>{x.price}</h2>
                                </div>
                            </div>
                        </div>
                        )                        
                    }
                </div>
                <div className="bds">
                    <Button variant="contained" color="warning" startIcon={<EventSeatIcon/>} onClick={this.seat} on>Select seat</Button>
                </div>
                </> : null
            }
            </>
        )
    }
}