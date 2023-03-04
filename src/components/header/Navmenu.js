import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navmenu = () => {
  return (
    <Navbar className='menu-bg' variant="dark">

    <Container>
      <Navbar.Brand href="#home">
        <img className='w-100 menu_logo' src='image/food.jpg'/>
      </Navbar.Brand>

      <Nav className="m-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Food</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Link to="/contact"><Nav.Link href="#contact">Contact</Nav.Link></Link> 
      </Nav>

    </Container>
    
  </Navbar>
  )
}

export default Navmenu