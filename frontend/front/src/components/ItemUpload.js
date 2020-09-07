import React, {Component} from 'react';

import {Card} from 'react-bootstrap';

export default class Item extends Component {

    render () {
        return (
        <Card className= {"border border-dark bg-dark text-white"}>
        <Card.Header>ITEM UPLOAD</Card.Header>
        <Card.Body>
        <Form>

        <Form.Group controlId="crystalForm">
    <Form.Label>Form of Crystal Resale</Form.Label>
    <Form.Control as="select">
        <option>"As is"</option>
        <option>Jewelry</option>
        <option>Pendulum</option>
        
    </Form.Control> 
    </Form.Group> 


     <Form.Group controlId="crystalTypes">
    <Form.Label>Type</Form.Label>
    <Form.Control type="types" placeholder="Enter type" />
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>
          

       

  <Form.Group controlId="prices">
    <Form.Label>Price</Form.Label>
    <Form.Control type="price" placeholder="Enter price" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="crystalColor">
    <Form.Label>Color</Form.Label>
    <Form.Control as="select">
        <option>Purple</option>
        <option>Indigo</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
        <option>Orange</option>
        <option>Red</option>
        <option>Transluscent</option>
        <option>Clear</option>
        <option>Black</option>
        <option>Rainbow</option>
    </Form.Control>
        

        <Form.Group controlId="crystalSize">
    <Form.Label>Size</Form.Label>
    <Form.Control as="select">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>Extra Large</option>
        </Form.Control>
        </Form.Group>


     <Form.Group controlId="wrapMaterial">
    <Form.Label>Crystal Wrap Material</Form.Label>
    <Form.Control as="select">
        <option>Copper</option>
        <option>Gold</option>
        <option>Silver</option>
        <option>Brass</option>
        <option>Plated</option>
        <option>String</option>
        <option>N/A</option>
        </Form.Control>
        </Form.Group>

    
        <Form.Group controlId="cordMaterial">
    <Form.Label>Pendulum Cord Material</Form.Label>
    <Form.Control as="select">
        <option>Copper</option>
        <option>Gold</option>
        <option>Silver</option>
        <option>Brass</option>
        <option>Plated</option>
        <option>String</option>
        <option>N/A</option>
        </Form.Control>
        </Form.Group>



      

       
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </Card.Body>
        </Card>

        );
    }
}
