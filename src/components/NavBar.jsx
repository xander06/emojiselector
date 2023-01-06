import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink className={({ isActive }) => isActive ? "navelementact" : "navelement"} to="/">Emoji</NavLink>
                        {/*  <NavLink className={({ isActive }) => isActive ? "navelementact" : "navelement"} to="/imgcalc">IMC Calculator</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navelementact" : "navelement"} to="/agecalc">Age Calculator</NavLink> */}
                        
                        <div className="logo">
                            
                            <img src="../img/logo.png" alt="Logo kruger" />
                            <p>Kruger Start</p>
                           </div>
                        {/* <NavLink className={({ isActive }) => isActive ? "navelementact" : "navelement"} to="/clock">My Clock</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navelementact" : "navelement"} to="/about">About Me</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navelementact" : "navelement"} to="/contact">Contact</NavLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar