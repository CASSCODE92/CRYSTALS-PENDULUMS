import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';

export default class Pendulums extends Component {

    render () {
        return (
            <div>
            <Card className= {"border border-dark bg-dark text-white"}>
               <Card.Header>PENDULUMS</Card.Header>
               <Card.Body>
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
               </Card.Body>
            </Card>

        </div>

        );
    }
}

