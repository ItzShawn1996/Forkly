import "./Navbar.css";

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Forkly</h1>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/explore">Explore</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;