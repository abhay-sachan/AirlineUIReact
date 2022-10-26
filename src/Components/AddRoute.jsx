import React from "react";
import 
{ TextField , FormLabel,
FormControl,Input,InputLabel, Button, Select, MenuItem, RadioGroup, Radio, FormControlLabel, FormGroup, TextareaAutosize } 
from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import RouteIcon from "@mui/icons-material/Route";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import '../index.css';
import axios from "axios";

import ReactDOM from "react-dom/client";
import ApplicationOwnerMenu from "./ApplicationOwnerMenu";
export default class AddRoute extends React.Component{
    constructor(){
        super();
        this.state = {
            city : '',
            error : null,
            errorOpen : false
        };
    }

    errorClose = (e) =>{
        this.setState({
            errorOpen : false
        });
    }

    getData = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    isValid = () =>{
        if(this.state.city === "") 
            return false;
        else
            return true;
    }

    AddRouteFunction = (e) =>{
        e.preventDefault();
        const root=ReactDOM.createRoot(document.getElementById("root"))
        const routetable={
            fromCity:this.state.city,
            flight:[]
        };
        axios.post("http://localhost:5163/api/ApplicationOwner/AddRoute", routetable).then(r=>{
            if(r.data)
            {
            alert("Route Added");
            root.render(<ApplicationOwnerMenu/>);
            }
            else{
                alert("Route Already Added")
            }
        })
        
    }

    render(){
        return(
            <div className="container-fluid form">
                <CssBaseline />
                <Paper className="paper" sx={{backgroundColor : "transparent" , boxShadow :"6px 6px 12px black"}}>
                    <Avatar>
                       <RouteIcon/>
                    </Avatar>
                <form onSubmit={this.AddRouteFunction}>
                    <FormControl required fullWidth margin="normal">
                        <InputLabel htmlFor="city" className="labels">Add Route</InputLabel>
                        <Input name="city" type="text"  disableUnderline={true} onChange={this.getData} className="inputs" />
                    </FormControl>
                    <Button disabled={!this.isValid()}
                    disableRipple
                    fullWidth
                    variant="text"
                    type="submit"
                    onClick={this.submitRegistration}>Add Route</Button>
                </form>
                {this.state.error ? (
                    <Snackbar variant="error" key={this.state.error}
                    anchorOrigin = {
                        {
                            vertical:"bottom",
                            horizontal:"center"
                        }
                    }
                    open={this.state.errorOpen}
                    onClose={this.errorClose}
                    autoHideDuration={3000}>
                        <SnackbarContent
                        message={
                            <duv>
                                <span style={{marginRight : "8px"}}>
                                    <ErrorIcon fontSize="large" color="red" />
                                </span>
                                <span>{this.state.error}</span>
                            </duv>
                        }
                        action = {[
                            <IconButton key="close" aria-label="close" onClick={this.errorClose}>
                                <CloseIcon color="red" />
                            </IconButton>
                        ]}
                        />
                    </Snackbar>
                ):null}
                </Paper>
            </div>
        );
    }

}
