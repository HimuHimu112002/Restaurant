import React from 'react'
import { Col, Row,Container,Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navmenu = () => {
  return (
    <div className='menu-bg' variant="dark">
    <Container>       
      <Row>
        <Col>
          <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img className='w-100 menu_logo' src='image/food.jpg'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Food</Nav.Link>
                  <Nav.Link href="#action3">Pricing</Nav.Link>
                  <Nav.Link href="#action4">About</Nav.Link>
                  <Link to="/contact"><Nav.Link href="#action5">Contact</Nav.Link></Link>                          
                </Nav>

                </Navbar.Collapse>
                
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
    
  </div>
  )
}

export default Navmenu