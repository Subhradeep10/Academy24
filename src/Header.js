import React from 'react'
import './Header.css'
import { Navbar, Container, Nav, } from 'react-bootstrap'

function Header() {
    return (
        < >
            <Navbar bg="warning" variant="dark" width="100%">
                <Container className='header'>
                    <Navbar.Brand href="#home" className="links">Academy24</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home" className="links">Home</Nav.Link>
                        <Nav.Link href="#features" className="links">Features</Nav.Link>
                        <Nav.Link href="#pricing" className="links">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
