import React from "react";
import "../App.css";
export default class HomePage extends React.Component{
    render(){
        return(
            <>
            <div className="headerr container-fluid">
            <header>
                <h1 className="h1style"> &nbsp;&nbsp; <img src="airlinelogo.png" alt=""  width={120}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Online Airline Reservation </h1>
                
            </header>
            <div className="bcimg">
            <img src="airlinebackground.png" width={1300} height={500}/>
            </div>
            </div>
            <h2>Diwali Discounts</h2>
            <div class="size"  style={{ backgroundImage: "url(/diwali.png)" }}>
              

              <div class="card">
            <div class="container">
             <img src="d1.png" width={300} height={150}/>
            <p><b><h3>On Booking between 3 to 5 seats</h3></b></p>
            </div>
            </div>
            <div class="card">
            <div class="container">
             <img src="d2.png" width={300} height={150}/>
            <p><b><h3>On Booking More than 5 seats</h3></b></p>
            </div>
            </div>
            <div class="card">
            <div class="container">
             <img src="d4.png" width={300} height={150}/>
            <p><b><h3>Hurry Book Now !!!!</h3></b></p>
            </div>
            </div>
            </div>
           
            
            </>
        
        )
        
    }
}