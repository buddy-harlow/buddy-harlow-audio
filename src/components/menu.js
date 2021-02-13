import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar, Nav} from 'react-bootstrap'


const Menu = () => (
    <Container>
    <Navbar fixed="top" expand="md" >
        <Navbar.Brand href="/">Buddy Harlow Audio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
                <Nav.Item as="li">
                    <a href="/#portfolio">Portfolio</a>
                </Nav.Item>
                <Nav.Item as="li">
                    <a href="/#about">About</a>
                </Nav.Item>
                <Nav.Item as="li">
                    <a href="/#contact">Contact</a>
                </Nav.Item>    
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>
    )


export default Menu;
