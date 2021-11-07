import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import useFirebase from '../../../Hooks/useFirebase';



const Header = () => {
    const { user, logOut } = useFirebase();
    const cartIcon = <FontAwesomeIcon icon={faMapMarked} />
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="text-warning fw-bolder fst-italic fs-2 " href="#home">{cartIcon} Zatra-Biroti</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fw-lighter font-family: cursive; fs-5">

                        <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white " as={Link} to={`/mybooking/${user.email}`}>My Booking</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/allbooking">All Booking</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/addpackage">Add Package</Nav.Link>


                        {user?.email ?
                            <Button onClick={logOut} variant="btn btn-outline-warning rounded-pill"> Logout </Button> :
                            <Nav.Link className="text-white" as={Link} to="/login">Login </Nav.Link>}
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        </>

    );
};

export default Header;