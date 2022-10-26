import { Box, TextField ,Select,MenuItem, Typography ,InputLabel,FormControl, Button} from "@mui/material";
import axios from "axios";
import React from "react";
export default class AddFlight extends React.Component{
    constructor(){
        super();
        this.state={
            cname:'',
            fcity:'',
            tcity:'',
            price:'',
            pickt:'',
            dropt:'',
            routes : []
        }
        
    }
    
    componentDidMount(){
        axios.get("http://localhost:5163/api/ApplicationOwner/ShowAllRoutes").then(r => {
            this.setState({routes : r.data});
        })
    }


    getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    locmatch=()=>{
        return this.state.fcity===this.state.tcity;
    }
    Bus=(e)=>{
        e.preventDefault();
        const flight = {
            emailId : sessionStorage.getItem("EM"),
            companyName : this.state.cname,
            fromCity : this.state.fcity,
            toCity : this.state.tcity,
            price : this.state.price,
            pickTime : this.state.pickt,
            dropTime : this.state.dropt,
            booking : []
        };
        axios.post("http://localhost:5163/api/Admin/AddFlight",flight).then(r => {
            if(r){
                alert("Flight Successfully");
            }else{
                alert("Flight cannot be added");
            }
        })
        if(this.locmatch()){
            alert("Both Locations Cannot be same")
        }
    }
    render(){
        return(
        <>
        <Box width={350} textAlign={"center"} margin="auto" padding={2} backgroundColor={"transparent"} marginTop={5} boxShadow={"6px 6px 12px green"}>
            <div className="space">
            <TextField variant="outlined" type={"text"} label="Company Name" name="cname" onInput={this.getdata} fullWidth/>
            </div>
            <div className="space">
           
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >FromCity</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                label="From City"
                name="fcity"
                onChange={this.getdata}
                
            >
                <MenuItem >Select</MenuItem>
                {
                    this.state.routes.map(x => 
                        <MenuItem value={x.fromCity}>{x.fromCity}</MenuItem>
                    )
                }
            </Select>
            </FormControl>
            </div>
            <div className="space">
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">ToCity</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                label="To City"
                name="tcity"
                onChange={this.getdata}

                
            >
                <MenuItem >Select</MenuItem>
                {
                    this.state.routes.map(x => 
                        <MenuItem value={x.fromCity}>{x.fromCity}</MenuItem>
                    )
                }
            </Select>
            </FormControl>
            </div>
            <div className="space">
            <TextField variant="outlined" type={"number"} label="Ticket Price" name="price" onInput={this.getdata} fullWidth/>
            </div>
            <div className="space">
            <TextField variant="outlined" type={"text"} label="Pickup Time" name="pickt" onInput={this.getdata} fullWidth/>
            </div>
            <div className="space">
            <TextField variant="outlined" type={"text"} label="Drop Time" name="dropt"  onInput={this.getdata} fullWidth/>
            </div>
            <div className="space">
                <Button variant="contained" type="submit" sx={{":hover":{backgroundColor:"green"}}} onClick={this.Bus}>Add Flight</Button>
            </div>

            
        </Box>
        </>
        )
    }
}