import React from "react";
import Button from "@mui/material/Button";
import "../seatstyles.css"
import Booking from "./Booking";
import ReactDOM from "react-dom/client";
let s=0;
const root = ReactDOM.createRoot(document.getElementById('root'));
export default class Seat extends React.Component{
    
    constructor(){
        super();
        this.state = {
            changeColor : false,
            noofseats:0,
            seats:''
        }
        
    }

    selectSeat = (e) =>{
        //this.setState({changeColor : !this.state.changeColor});
        this.state.changeColor = !this.state.changeColor;
        if(this.state.changeColor == true){
            e.target.style.backgroundColor = "red"
        
            //alert("Seat Selected!!!");
        }
        else{
            e.target.style.backgroundColor = "red";
            

            //alert("Seat Not Selected!!!");
        }
    }
    Bookseat=(e)=>{
        var sno="";
        var c=0;
        var s=document.getElementsByName("seats");//javascript
        for(var i=0;i<s.length;i++)
        {
            if(s[i].checked){
               c+=1;
               sno+=s[i].value + ",";

            }
               
        }
        this.state.seats=sno;
        this.state.noofseats=c;
        sessionStorage.setItem("seats",sno)
        sessionStorage.setItem("noofseats",c)
        alert(this.state.seats+"Total Seats : "+this.state.noofseats)
        root.render(<Booking/>)
    }


    render(){
        return(
            <><>
                <div class="plane" >
                    <div class="cockpit" style={{width:"370px"}}>
                        <h1 className="h1"> Seat Selection</h1>
                    </div>
                    <div class="exit exit--front fuselage" style={{width:"370px"}}>

                    </div>
                    <ol class="cabin fuselage ol" >
                        <li class="row row--1" >
                            <ol class="seats " type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="1A" value="1A" onClick={this.selectSeat}/>
                                    <label for="1A" className="label">1A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="1B" value="1B"onClick={this.selectSeat}/>
                                    <label for="1B" className="label">1B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="1C" value="1C" onClick={this.selectSeat}/>
                                    <label for="1C" className="label">1C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="1D" value="1D"onClick={this.selectSeat}/>
                                    <label for="1D" className="label">1D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="1E" value="1E" onClick={this.selectSeat}/>
                                    <label for="1E" className="label">1E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="1F" value="1F" onClick={this.selectSeat}/>
                                    <label for="1F" className="label">1F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--2">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="2A" value="2A"onClick={this.selectSeat}/>
                                    <label for="2A" className="label">2A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="2B" value="2B" onClick={this.selectSeat}/>
                                    <label for="2B" className="label">2B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" type="checkbox" className="input" id="2C" value="2C" onClick={this.selectSeat}/>
                                    <label for="2C" className="label">2C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="2D" value="2D" onClick={this.selectSeat}/>
                                    <label for="2D" className="label">2D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="2E" value="2E" onClick={this.selectSeat}/>
                                    <label for="2E" className="label">2E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="2F" value="2F" onClick={this.selectSeat}/>
                                    <label for="2F" className="label">2F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--3">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="3A" value="3A" onClick={this.selectSeat}/>
                                    <label for="3A" className="label">3A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="3B" value="3B" onClick={this.selectSeat}/>
                                    <label for="3B" className="label">3B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="3C" value="3C" onClick={this.selectSeat}/>
                                    <label for="3C" className="label">3C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="3D" value="3D" onClick={this.selectSeat}/>
                                    <label for="3D" className="label">3D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="3E" value="3E" onClick={this.selectSeat}/>
                                    <label for="3E" className="label">3E</label>
                                </li>
                                <li class="seat">
                                    <input  name="seats" className="input" type="checkbox" id="3F" value="3F" onClick={this.selectSeat}/>
                                    <label for="3F" className="label">3F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--4">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="4A" value="4A" onClick={this.selectSeat}/>
                                    <label for="4A" className="label">4A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="4B" value="4B" onClick={this.selectSeat}/>
                                    <label for="4B" className="label">4B</label>
                                </li>
                                <li class="seat">
                                    <input  name="seats" className="input" type="checkbox" id="4C" value="4C" onClick={this.selectSeat}/>
                                    <label for="4C" className="label">4C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="4D" value="4D" onClick={this.selectSeat}/>
                                    <label for="4D" className="label">4D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="4E" value="4E"onClick={this.selectSeat}/>
                                    <label for="4E" className="label">4E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="4F" value="4F" onClick={this.selectSeat}/>
                                    <label for="4F" className="label">4F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--5">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="5A" value="5A" onClick={this.selectSeat}/>
                                    <label for="5A" className="label">5A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="5B" value="5B" onClick={this.selectSeat}/>
                                    <label for="5B" className="label">5B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="5C" value="5C" onClick={this.selectSeat}/>
                                    <label for="5C" className="label">5C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="5D" value="5D" onClick={this.selectSeat}/>
                                    <label for="5D" className="label">5D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="5E" value="5E" onClick={this.selectSeat}/>
                                    <label for="5E" className="label">5E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="5F" value="5F" onClick={this.selectSeat}/>
                                    <label for="5F" className="label">5F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--6">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="6A"  value="6A" onClick={this.selectSeat}/>
                                    <label for="6A" className="label">6A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="6B" value="6B" onClick={this.selectSeat}/>
                                    <label for="6B" className="label">6B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="6C" value="6C" onClick={this.selectSeat}/>
                                    <label for="6C" className="label">6C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="6D" value="6D" onClick={this.selectSeat}/>
                                    <label for="6D" className="label">6D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="6E" value="6E" onClick={this.selectSeat}/>
                                    <label for="6E" className="label">6E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="6F" value="6F" onClick={this.selectSeat}/>
                                    <label for="6F" className="label">6F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--7">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="7A" value="7A" onClick={this.selectSeat}/>
                                    <label for="7A" className="label">7A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="7B" value="7B" onClick={this.selectSeat}/>
                                    <label for="7B" className="label">7B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="7C" value="7C" onClick={this.selectSeat}/>
                                    <label for="7C" className="label">7C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="7D" value="7D" onClick={this.selectSeat}/>
                                    <label for="7D" className="label">7D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="7E" value="7E" onClick={this.selectSeat}/>
                                    <label for="7E" className="label">7E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="7F" value="7C" onClick={this.selectSeat}/>
                                    <label for="7F" className="label">7F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--8">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="8A" value="8A" onClick={this.selectSeat}/>
                                    <label for="8A" className="label">8A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="8B" value="8A" onClick={this.selectSeat}/>
                                    <label for="8B" className="label">8B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="8C" value="8C" onClick={this.selectSeat}/>
                                    <label for="8C" className="label">8C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="8D" value="8D" onClick={this.selectSeat}/>
                                    <label for="8D" className="label">8D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="8E" value="8E"onClick={this.selectSeat}/>
                                    <label for="8E" className="label">8E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="8F" value="8F" onClick={this.selectSeat}/>
                                    <label for="8F" className="label">8F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--9">
                            <ol class="seats" type="A">
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="9A" value="9A" onClick={this.selectSeat}/>
                                    <label for="9A" className="label">9A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="9B" value="9B" onClick={this.selectSeat}/>
                                    <label for="9B" className="label">9B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="9C" value="9C" onClick={this.selectSeat}/>
                                    <label for="9C" className="label">9C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="9D" value="9D" onClick={this.selectSeat}/>
                                    <label for="9D" className="label">9D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="9E" value="9E" onClick={this.selectSeat}/>
                                    <label for="9E" className="label">9E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="9F" value="9F" onClick={this.selectSeat}/>
                                    <label for="9F" className="label">9F</label>
                                </li>
                            </ol>
                        </li>
                        <li class="row row--10" >
                            <ol class="seats" type="A" >
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="10A" value="10A" onClick={this.selectSeat}/>
                                    <label for="10A" className="label">10A</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="10B" value="10B" onClick={this.selectSeat}/>
                                    <label for="10B" className="label">10B</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="10C" value="10C" onClick={this.selectSeat}/>
                                    <label for="10C" className="label">10C</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="10D" value="10D" onClick={this.selectSeat}/>
                                    <label for="10D" className="label">10D</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="10E" value="10E" onClick={this.selectSeat}/>
                                    <label for="10E" className="label">10E</label>
                                </li>
                                <li class="seat">
                                    <input name="seats" className="input" type="checkbox" id="10F" value="10F" onClick={this.selectSeat}/>
                                    <label for="10F" className="label">10F</label>
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <div class="exit exit--back fuselage " style={{width:"370px"}}>

                    </div>
                </div>




            </><div className="center">
                    <Button variant="contained" onClick={this.Bookseat}>Book Now</Button>
                </div>
                </>
        
        
        )
    }
}