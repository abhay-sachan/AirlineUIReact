import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Payment from "./Payment";
const root = ReactDOM.createRoot(document.getElementById('root'));
export default class Booking extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:sessionStorage.getItem("EM"),
            noofseats:sessionStorage.getItem("noofseats"),
            seatno:sessionStorage.getItem("seats"),           
        }
    }



    getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    payment=()=>{
        alert(this.state.name+this.state.email+this.state.noofseats+this.state.seatno);
        const flightdata = {
            flightId : sessionStorage.getItem("flightID"),
            customerName : this.state.name,
            emailId : this.state.email,
            bookedSeats : this.state.noofseats
        }
        sessionStorage.setItem("cname",this.state.name);
        console.log(flightdata);
        axios.post("http://localhost:5163/api/Customer/AddBooking/",flightdata).then(r =>{
            
            if(r){
                alert("Your Seats are booked");
                root.render(<Payment/>)
            }else{
                alert("Booking Failed");
            }
        })
    }
    render(){
        return(
        <>
        
         <Box margin="auto" boxShadow={"6px 12px 24px red"} width={500}  height={500} textAlign={"center"} marginTop={8} padding={4}>
            <Typography variant="h2">BILL</Typography>
            <TextField variant="outlined" label="Name" type={"text"} name="name" fullWidth sx={{padding:"2px",margin:"5px"}} onInput={this.getdata}/>
            <TextField variant="filled" label="Email" type={"email"} name="email" fullWidth sx={{padding:"2px",margin:"5px"}} value={this.state.email} disabled/>
            <TextField variant="filled" label="No of seats" type={"number"} name="noofseats" fullWidth sx={{padding:"2px",margin:"5px"}} value={sessionStorage.getItem("noofseats")} disabled/>
            <TextField variant="filled" label="seat no's" type={"text"} name="seatno"fullWidth sx={{padding:"2px",margin:"5px",fontSize : 30}} value={sessionStorage.getItem("seats")} disabled/>            
            <Button type={"submit"} variant="contained" color="warning" onClick={this.payment}>Payment</Button>
         </Box>
        
        </>
        )
    }
}