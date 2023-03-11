import React from 'react'
import { Card, Col, Container, Row,Button } from 'react-bootstrap'


const MenuItems = (props) => {
  return (
    <Container>
        <Row>
            <Col>
                <Card onClick={()=>props.onDishSelected(props.dish)} style={{ width: '20rem', marginBottom:'20px', cursor:'pointer'}}>
                    <Card.Img variant="top" src={props.dish.image} />

                    {/* (props.dish) mane akhane akta akta kore dish asbe and dish name ti props er name hisabe pathano hoiyese*/}

                    <Card.Body>
                        <Card.Title>{props.dish.name}</Card.Title>
                        <Button variant="success" className='text-white'>View Details</Button>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default MenuItems