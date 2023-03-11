import React,{Component} from "react";
import { Row,Container} from "react-bootstrap";
import MENUITEMS from "../../data/FoodItems";
import MenuItems from "./MenuItems";
import Modal from 'react-bootstrap/Modal';
import DishDeteails from "./DishDeteails";
import Button from 'react-bootstrap/Button';


class Menu extends Component{
    
    state = {
        dishes: MENUITEMS,
        selectDish: null,
        show: false,
          
    }
    
    onDishSelected = dish => {
        this.setState({selectDish:dish});
        this.setState({show:true});
    
    }
   

    render()
        {           
         const menu = this.state.dishes.map((item)=>{
           
            return(
                <MenuItems dish={item} key={item.id} onDishSelected={this.onDishSelected}/>
               
            )
         })

         let disDetal = null
         if(this.state.selectDish != null){
            disDetal = <DishDeteails dish={this.state.selectDish}/>
         }
        
        let handleClose =()=>{
            this.setState({show:false})
        }
        
        return(
        <>

            <Container className="my-5">
                <Row xs={1} sm={2} md={3} className="g-2">   
                    {menu}
                            
                </Row>                
            </Container>
                                      
            <Modal show={this.state.show}  onHide={()=>handleClose()}>

                <Modal.Header closeButton>
                    <Modal.Title>Food Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {disDetal}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={()=>handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
                 
        </>
        )
    }
}

export default Menu