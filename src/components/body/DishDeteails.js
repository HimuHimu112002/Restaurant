import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import UserComment from './UserComment'

const DishDeteails = (props) => {
  return (

        <Card style={{cursor:'pointer'}}>
            <Card.Img variant="top" src={props.dish.image} />

            <Card.Body>
                <Card.Title>Name : {props.dish.name}</Card.Title>
            
                <Card.Text>
                    Position : {props.dish.Label}
                </Card.Text>
                <Card.Text>
                    Price : {props.dish.Price}
                </Card.Text>
                <Card.Text>
                    {props.dish.discription}
                </Card.Text>

                <UserComment Comment={props.dish.Comment}/>
                <Button variant="primary">Order Now</Button>
            </Card.Body>

        </Card>
  )
}

export default DishDeteails