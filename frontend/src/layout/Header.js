/* Header.js */
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {Container, Navbar} from "react-bootstrap";

const Header = () => {
    const [key, setKey] = useState('home');
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"} eventKey='home' title='home'>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/board"} eventKey='board' title='board'>Board</Nav.Link>
                    <Nav.Link as={Link} to={"/map"} eventKey='map' title='map'>Map</Nav.Link>
                    <Nav.Link as={Link} to={"/board2"} eventKey='board2' title='board2'>Board2</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;