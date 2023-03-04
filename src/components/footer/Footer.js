import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer_bg'>
        <Container >
            <Row>
                <Col md="3">
                    <h4 className='text-white'>MENU LIST</h4>
                    <ul>
                        <li>
                            <a href=''>Home</a>
                        </li>
                        <li><a href=''>Food</a></li>
                        <li><a href=''>Pricing</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                </Col>
                <Col md="5">
                    <h4 className='text-white'>ADDRESS</h4>
                    <ul>
                        <li>Dhaka, Bangladesh</li>
                        <li>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</li>
                    </ul>
                </Col>
                <Col md="4">
                    <h4 className='text-white'>LOCATION</h4>
                    <ul>
                    <li>Dhaka, Bangladesh</li>
                    <li>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer