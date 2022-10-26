import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../index.css'
import AddFlight from "./AddFlight";
import ChangePassword from "./ChangePassword";
import DisableFlight from "./DisableFlight";
import ShowAllFlightsOfAdmin from "./ShowAllFlightsOfAdmin";


export default function AdminMenu() {

    return (
        <Router>
        <nav>
            <ol className="horizontal">
                <li className="li"><Link to="/AddFlight">Add Flight</Link></li> 
                <li className="li"><Link to="/AllFlights">Your Flights</Link></li> 
                <li className="li"><Link to="/DisableFlight">Disable Flight</Link></li> 
                <li className="li"><Link to="/UpdatePassword">Change Password</Link></li> 

            </ol>
            <Routes>
            
            <Route exact path="/AddFlight" element={<AddFlight/>}></Route>  
            <Route exact path="/AllFlights" element={<ShowAllFlightsOfAdmin/>}></Route>  
            <Route exact path="/DisableFlight" element={<DisableFlight/>}></Route> 
            <Route exact path="/UpdatePassword" element={<ChangePassword/>}></Route>  

              
            </Routes>
        </nav>
    </Router>
    )
}