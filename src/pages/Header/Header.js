import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/download.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "#ff7f47"
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand>
            <NavLink to="/home" className="me-3">
                <img
                alt=""
                src={logo}
                width="130"
                height="50"
                className="d-inline-block align-top"
                />
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
            <Nav className="me-auto">
                <NavLink activeStyle={activeStyle} className="me-3" to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} className="me-3" to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} className="me-3" to="/contact">Contact Us</NavLink>
            </Nav>
            <Nav className="text-center">
                {
                    user.email && <NavLink activeStyle={activeStyle} className="me-3 mt-lg-2" to="/myBookings">My Bookings</NavLink>
                }
                {
                    user.email &&
                    <NavDropdown title="Admin" className="mx-auto mb-1 mb-lg-0">
                        <NavDropdown.Item><NavLink to="/allBookings">All Bookings</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to="/addNew">Add a new package</NavLink></NavDropdown.Item>
                    </NavDropdown>
                }
                {
                    user.email ? 
                    <div className="btn-colour">
                        <Button onClick={logOut} variant="warning rounded-0 text-white ms-3 px-3">
                            <i className="fas fa-sign-in-alt"></i> Sign Out
                         </Button>
                    </div>
                    :
                    <NavLink to="/signin" className="btn-colour">
                        <Button variant="warning rounded-0 text-white px-3">
                            <i className="fas fa-sign-in-alt"></i> Sign In
                        </Button>
                    </NavLink>
                }
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;