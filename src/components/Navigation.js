import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import React from 'react';

function Navigation() {
    return (
        <Navbar className='border-bottom py-4 shadow-sm' bg='transparent' expand='lg'>
            <Navbar.Brand style={{color:"black", fontWeight:"bolder", paddingLeft:"5rem"}}>Shaoqin Fu</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/" style={{color:"black", fontWeight:"bolder"}}>Home</Link>
                    <Link className="nav-link" to="/projects" style={{color:"black", fontWeight:"bolder"}}>Projects</Link>
                    <Link className="nav-link" to="/about" style={{color:"black", fontWeight:"bolder"}}>About</Link>
                    <Link className="nav-link" to="/contact" style={{color:"black", fontWeight:"bolder"}}>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
