import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';
import amethyst from '../Assets/crystal-images/amethyst.jpg'

export default class Crystals extends Component {

    render () {
        return (

            
            <div>
                <img className="amethyst" src={amethyst}></img>
            
            <Card className= "model-one">
                <div className="table-one">
               <div>
               <Card.Header>CRYSTALS</Card.Header>
               </div>
               {/* <Card.Body> */}
                   <div><br/>
                   <Table bordered hover striped variant="dark">
                   
                   <thead>
    <tr>
      <th>#</th>
      <th>Price</th>
      <th>Color</th>
      <th>Size</th>
      <th>Type</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>$25</td>
      <td>Purple</td>
      <td>Medium</td>
      <td>Amethyst</td>
    </tr>
    
  </tbody>

                   </Table>
                   </div>
                   </div> 
               {/* </Card.Body> */}
            </Card>

    </div>        

        );
    }
}

