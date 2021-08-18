import React from 'react'
import './Header.css'
import { Navbar, Container, Nav, } from 'react-bootstrap'

function Header() {
    return (
        <>
            <Navbar bg="warning" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Academy24</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

        </>
    )
}

export default Header
