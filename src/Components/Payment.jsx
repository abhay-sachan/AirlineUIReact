import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import CustomerMenu from "./CustomerMenu";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default class Payment  extends React.Component{

    constructor(){
        super();
        this.state = {
            booking : [],
            flightId : sessionStorage.getItem("flightID")
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5163/api/Customer/ShowLatestBooking").then(r =>{
            console.log(r.data);
                sessionStorage.setItem("CN",r.data.customerName);
                sessionStorage.setItem("TotalPrice",r.data.discountedPrice);
        })

        axios.get("http://localhost:5163/api/Admin/GetAllFlight").then(r => {
            
            for (let index = 0; index < r.data.length; index++) {
                if(r.data[index].flightId == this.state.flightId){
                    console.log(r.data[index]);
                    sessionStorage.setItem("Company",r.data[index].companyName);
                    sessionStorage.setItem("fromCity",r.data[index].fromCity);
                    sessionStorage.setItem("toCity",r.data[index].toCity);
                    sessionStorage.setItem("pickTime",r.data[index].pickTime);
                    sessionStorage.setItem("dropTime",r.data[index].dropTime);
                    break;
                }
            }
        })
    }

    Done=()=>{
        root.render(<CustomerMenu/>)
    }
    render(){
        return(
            <>    
            <h1>Payment Details</h1>
            {root.render(<Payment />)}
                <Box width={450} boxShadow={"5px 5px 12px black"} margin="auto" padding={2} >
                    <h2>Name: &nbsp;{sessionStorage.getItem("CN")}</h2>
                    <br />
                    <h2>Flight Name: &nbsp;{sessionStorage.getItem("Company")}</h2>
                    <br />
                    <h2>Pickup Time: &nbsp;{sessionStorage.getItem("fromCity")}</h2>
                    <br />
                    <h2>Drop Time: &nbsp;{sessionStorage.getItem("toCity")}</h2>
                    <br />
                    <h2>Seat No: &nbsp;{sessionStorage.getItem("noofseats")}</h2>
                    <br />
                    <h2>Count: &nbsp;{sessionStorage.getItem("seats")}</h2>
                    <br />
                    <h2>Payable Amount : &nbsp;{sessionStorage.getItem("TotalPrice")}</h2>
                    <Button variant="contained" type="submit" onClick={this.Done}>Done</Button>
                </Box>
            </>
        )
    }
}