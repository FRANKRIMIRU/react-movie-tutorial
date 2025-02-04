import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Rimiru's Cinema</Link>
      </div>
      <div className="navbar-links">
        <Link to ="/" className="nav-link">Mucie</Link>
        <Link to ="/favorites" className="nav-link">Zilizopendwa</Link>
      </div>
    </nav>
  );
}

export default NavBar;