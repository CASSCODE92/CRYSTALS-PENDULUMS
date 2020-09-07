import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';

export default class Crystals extends Component {

    render () {
        return (
            <Card className= {"border border-dark bg-dark text-white"}>
               <Card.Header>CRYSTALS</Card.Header>
               <Card.Body>
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
               </Card.Body>
            </Card>

        );
    }
}

