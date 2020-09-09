import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';
import opal from '../Assets/crystal-images/opal.jpg'

export default class Pendulums extends Component {

    render () {
        return (
            <div>
                <img className="opal" src={opal}></img>
            <Card className= "model-three">
                <div className= "table-three">
                    <div>
               <Card.Header>PENDULUMS</Card.Header>
               </div>
               {/* <Card.Body> */}
               <div><br/>
                   <Table bordered hover striped variant="dark">
                   <thead>
    <tr>
      <th>#</th>
      <th>Price</th>
      <th>Color</th>
      <th>Wrap Material</th>
      <th>Size</th>
      <th>Type</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>$85</td>
      <td>Rainbow</td>
      <td>Silver</td>
      <td>Small</td>
      <td>Opal</td>
   
    </tr>
    
  </tbody>

                   </Table>
                   </div>
                   </div>
            {/* //    </Card.Body> */}
            </Card>

        </div>

        );
    }
}

