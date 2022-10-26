import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../index.css'
import ChangePassword from "./ChangePassword";
import CustomerBooking from "./CustomerBooking";
import ShowAllRunningFlights from "./ShowAllRunningFlights";
import ShowCustomerBookings from "./ShowCustomerBookings";


export default function CustomerMenu() {

    return (
        <Router>
        <nav>
            <ol className="horizontal">
                <li className="li"><Link to="/CustomerBooking">Ticket Booking</Link></li> 
                <li className="li"><Link to="/ChangePassword">Change Password</Link></li>
                <li className="li"><Link to="/ShowRunningFlights">Show Running Flights</Link></li> 
                <li className="li"><Link to="/ShowCustomerBooking">View Bookings</Link></li> 
                
            </ol>
            <Routes>
            <Route exact path="/CustomerBooking" element={<CustomerBooking/>}></Route> 
            <Route exact path="/ChangePassword" element={<ChangePassword/>}></Route>  
            <Route exact path="/ShowRunningFlights" element={<ShowAllRunningFlights/>}></Route>
            <Route exact path="/ShowCustomerBooking" element={<ShowCustomerBookings/>}></Route>  
            </Routes>
        </nav>
    </Router>
    )
}