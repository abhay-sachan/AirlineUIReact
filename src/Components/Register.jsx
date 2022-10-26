import { Typography,TextField } from "@mui/material";
import React from "react";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import LoginOutlinedIcon  from "@mui/icons-material/LoginOutlined";
import '../index.css';
import axios from 'axios'
import ReactDOM from "react-dom/client";
import Login from "./Login";


export default class Register extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            pwd:'',
            usertype:'',
            cpwd : '',
            booking : []
        }
    }
    Getdata=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    PasswordMatch = () => {
        return this.state.pwd === this.state.cpwd;
    }
    submit=(e)=>{
        e.preventDefault();
        alert(this.state.email+this.state.pwd+this.state.usertype);
        sessionStorage.setItem("UType",this.state.usertype);
        const root = ReactDOM.createRoot(document.getElementById('root'));

        if(this.PasswordMatch){
            const register = {
                emailId : this.state.email,
                password : this.state.pwd,
                userType : this.state.usertype,
                booking : this.state.booking
            }
            
            axios.post("http://localhost:5163/api/RegisterLogin/NewRegister",register).then(r => {
                if(r){
                    alert(r);
                    alert("Registration Successful");
                    root.render(<Login/>);
                }
            })
        }
        else{
            alert("Passwords Should be same");
        }
        
       }
    isvalid=()=>{
        if((this.state.email==="") || (this.state.pwd==="") || (this.state.usertype==="")){
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
                <Typography variant="h2">Register</Typography>
                <form onSubmit={this.submit}>
                    
                    <div className="space">
                    <TextField variant="filled" label="EmailId" type={"email"} name="email" fullWidth onInput={this.Getdata} required/>
                    </div>

                    <div className="space" >
                    <TextField variant="filled" label="password" type={"password"} name="pwd" fullWidth onInput={this.Getdata} required/>
                    </div>
                    <div className="space" >
                    <TextField variant="filled" label="confirm password" type={"password"} name="cpwd" fullWidth onInput={this.Getdata} required/>
                    </div>
                
                    <div className="space">
                        <label>UserType:</label>
                        <input type="radio" name="usertype" value="Customer" onChange={this.Getdata} required/> Customer
                        <input type="radio" name="usertype" value="Admin" onChange={this.Getdata} required/> Admin
                    </div>

                    <div className="space">
                    <Button variant="contained" type="submit" endIcon={<LoginOutlinedIcon />}   sx={{":hover":{backgroundColor:"green"}}} disabled={!this.isvalid()}
                    disableRipple onClick={this.submit}> Register</Button>
                    </div>  
                </form>    
            </Box>
            </>
        )
    }
}