import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Forkly</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;