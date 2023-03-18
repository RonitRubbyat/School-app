import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink className={`nav-links`} to={'/'}>Dhaka College</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={`nav-links`} to={'/'}>Home</NavLink>
                        <NavLink className={`nav-links`} to={'/courses'}>Courses</NavLink>
                        <NavLink className={`nav-links`} to={'/blogs'}>Blogs</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;