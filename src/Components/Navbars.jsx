import React from 'react';
import {Container,Navbar,Button,Form,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link href="#action2" as={Link} to={'/about'}>About</Nav.Link>
                            <Nav.Link href="#action1" as={Link} to={'/contact'} >Contact</Nav.Link>
                            <Nav.Link href="#action2" as={Link} to={'/services'}>Services</Nav.Link>
                            
                            
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>

                </Navbar>

        </div>
    )
}

export default Navbars;
