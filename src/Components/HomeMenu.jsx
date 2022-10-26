import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../index.css'
import DisableFlight from "./DisableFlight";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";



export default function HomeMenu() {

    return (
        <Router>
        <nav>
            <ol className="horizontal">
            
                <li className="li"><Link to="/Home">Home</Link></li>  
                <li className="li"><Link to="/Login">Login</Link></li> 
                <li className="li"><Link to="/Register">Register</Link></li> 
             
            </ol>
            <Routes>
            <Route exact path="/Home" element={<HomePage/>}></Route>  
            <Route exact path="/Login" element={<Login/>}></Route>  
            <Route exact path="/Register" element={<Register/>}></Route>   
            </Routes>
        </nav>
    </Router>
    )
}