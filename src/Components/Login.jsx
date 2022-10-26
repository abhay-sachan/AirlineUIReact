import { Typography,TextField, requirePropFactory } from "@mui/material";
import React from "react";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import LoginOutlinedIcon  from "@mui/icons-material/LoginOutlined";
import '../index.css';
import ReactDOM from "react-dom/client";
import AdminMenu from './AdminMenu'
import ApplicationOwnerMenu from "./ApplicationOwnerMenu";
import axios from "axios";
import CustomerMenu from "./CustomerMenu";
const root = ReactDOM.createRoot(document.getElementById('root'));

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            pwd:'',
            tnc:''
        }
    }
    Getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submit=(e)=>{   
        e.preventDefault();
        sessionStorage.setItem("EM",this.state.email);
        if(this.state.email == "appowner@gmail.com" && this.state.pwd == "123"){
            root.render(<ApplicationOwnerMenu/>)
            alert("Application Owner Login Successful");
          
        }
        else {
        axios.get("http://localhost:5163/api/RegisterLogin/Login/" + this.state.email + "/" + this.state.pwd).then( r=> {
            console.log(r.data);
            if(r.data == "Customer"){
                root.render(<CustomerMenu/>)
                alert("Customer Login")
            }else if(r.data == "Admin"){
                alert("Admin Login Successful");
                root.render(<AdminMenu/>);
            }
            else{
                alert("Invalid Credentials");
            }
        })
    }
       }
    isvalid=()=>{
        if((this.state.email==="") || (this.state.pwd==="")){
            return false
        }
        else{
            return true
        }
    }
    render(){
        return(
            <>
            <Box textAlign={"center"} boxShadow={"6px 6px 12px black"} margin="auto" width={350} marginTop={6}  padding={5}   sx={{
                ":hover": {
                    
                    boxShadow:"6px 6px 12px red",
                  }
                }}>
                <Typography variant="h2">Login</Typography>
                <form onSubmit={this.submit}>
                    
                    <div className="space">
                    <TextField variant="filled" label="EmailId" type={"email"} name="email" fullWidth onInput={this.Getdata} required/>
                    </div>
                    
                    
                    <div className="space" >
                    <TextField variant="filled" label="password" type={"password"} name="pwd" fullWidth onInput={this.Getdata} required/>
                    </div>

                    <input type="checkbox" name="tnc"   required/> I agree to the terms and conditions
                    
                    <div className="space">
                    <Button variant="contained" type="submit" endIcon={<LoginOutlinedIcon />}  color="warning" sx={{":hover":{backgroundColor:"green"}}} disabled={!this.isvalid()}
                    disableRipple onClick={this.submit}> Login</Button>
                    </div>
                </form>
            </Box>
            </>
        )
    }
}