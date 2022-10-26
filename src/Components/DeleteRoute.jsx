import React from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import 
{ TextField , FormLabel,
FormControl,Input,InputLabel, Button, Select, MenuItem, RadioGroup, Radio, FormControlLabel, FormGroup, Box, TextareaAutosize } 
from "@mui/material";

export default class DeleteRoute extends React.Component {
  
   constructor()
   {
    super();
    this.state={
      allroutes:[],
      route:''
    }
   }
   getData = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    });
   }
   componentDidMount()
   {
       axios.get("http://localhost:5163/api/ApplicationOwner/ShowAllRoutes").then(r=>
       {      
       console.log(r.data);
       this.setState({allroutes:r.data});

      })
   }
   DeleteRoute=()=>{
    axios.delete("http://localhost:5163/api/ApplicationOwner/DeleteRoute/"+this.state.route).then(r=>
        {        
        if(r.data)
        { 
          alert("Route Deleted Successfully");
        }
    });
}

  render()
{
    return (
        <div className="container-fluid form">
                <CssBaseline />
                <Box padding={2} margin={5} width={350} boxShadow ={"6px 6px 12px black"}>
                    <Avatar sx={{margin:"auto"}}>
                      <DeleteIcon/>  
                    </Avatar>
                <form>
                    <FormControl fullWidth required margin="normal">
                        <FormLabel htmlFor="route" className="labels">Route</FormLabel>
                        <Select name="route" onChange={this.getData} className="inputs">
                            {this.state.allroutes.map(x=>
                                <MenuItem value={x.fromCity}>{x.fromCity}</MenuItem>
                            
                            )}
                            </Select>
                    </FormControl>        
                    <Button 
                    disableRipple
                    fullWidth
                    variant="text"
                    type="submit"
                    onClick={this.DeleteRoute}>Delete Route</Button>
                </form>
                
                </Box>
            </div>
        );
}
}
