import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import infinityLogo from '../../../image/infinity-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

            <div className='logo-div'>
                <img src={infinityLogo} alt="" />
            </div>

            <div className='my-3'>
                <Navbar className='nav-bar' expand="lg">
                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto mx-5">
                                <Nav.Link as={Link} to={'/'} >Home</Nav.Link>
                                <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                                <Nav.Link as={Link} to={'/products'}>Products</Nav.Link>

                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={'/retail'}>Retail</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/wholesale'}>Wholesale</NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to={'/manufacturer'}>
                                        Manufacturer
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="More products" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={'/retail'}>option-1 </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/retail'}>option-2 </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/retail'}>option-3</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/retail'}>option-4</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/retail'}>option-5</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/retail'}>option-6</NavDropdown.Item>



                                    <NavDropdown.Item as={Link} to={'/manufacturer'}>
                                        Manufacturer
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link as={Link} to={'/login'}>login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;