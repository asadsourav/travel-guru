import React from 'react';
import { Button, Card, CardDeck, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../LogoWhite.png'
import Rectangle1 from '../../Image/Rectangle1.png'
import HomeStyle from './Home.css'

import coxBazarPic from '../../Image/rsz_rectangle_1.png'
import sreemangalPic from '../../Image/rsz_sreemongol.png'
import sunderbanPic from '../../Image/rsz_sundorbon.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Rectangle1})` }} className="home">
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand className="mx-5" href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search your destination..." className="mr-sm-2 transparent" />

                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto px-5 ">
                        <Nav.Link className="px-4 text-white" href="#home">News</Nav.Link>
                        <Nav.Link className="px-4 text-white" href="#link">Destination</Nav.Link>
                        <Nav.Link className="px-4 text-white" href="#link">Blog</Nav.Link>
                        <Nav.Link className="px-4 text-white" href="#link">Contact</Nav.Link>
                        <Button className="px-4 text-black" variant="warning">Login</Button>


                    </Nav>

                </Navbar.Collapse>
            </Navbar>

            {/* destinations card area   */}

          <div className="d-flex justify-content-end">
          <Link to ='/CoxsBazarDetails'> <img style={{ borderRadius:'30px'}}className="px-2 "  src={coxBazarPic} alt=""/> </Link> 
          <Link to= '/SreemongolDetails'><img className="px-2"  src={sreemangalPic} alt=""/> </Link>
            <Link to='/SundorbanDetails'>  <img className="px-2"  src={sunderbanPic} alt=""/> </Link> 


          </div>
        </div>
    );
};

export default Home;