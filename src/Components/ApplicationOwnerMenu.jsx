import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../index.css'
import AddRoute from "./AddRoute";
import DeleteRoute from "./DeleteRoute";
import ShowAllBookings from "./ShowAllBookings";
import ShowAllFlights from "./ShowAllFlights";
import ShowAllRoutes from "./ShowAllRoutes";



export default function ApplicationOwnerMenu() {

    return (
        <Router>
        <nav>
            <ol className="horizontal">
                <li className="li"><Link to="/ShowAllRoutes">Show All Routes</Link></li>
                <li className="li"><Link to="/AddRoute">Add Route</Link></li>
                <li className="li"><Link to="/DeleteRoute">Delete Route</Link></li>
                <li className="li"><Link to="/ShowAllBookings">Show All Bookings</Link></li>
                <li className="li"><Link to="/ShowAllFlights">All Flights</Link></li> 
               
               
            </ol>
            <Routes>
            <Route exact path="/ShowAllRoutes" element={<ShowAllRoutes />}></Route> 
                <Route exact path="/AddRoute" element={<AddRoute />}></Route> 
                <Route exact path="/DeleteRoute" element={<DeleteRoute />}></Route> 
                <Route exact path="/ShowAllBookings" element={<ShowAllBookings />}></Route> 
                <Route exact path="/ShowAllFlights" element={<ShowAllFlights/>}></Route>  
              
            </Routes>
        </nav>
    </Router>
    )
}