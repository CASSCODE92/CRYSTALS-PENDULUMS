import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';

export default class Jewelry extends Component {

    render () {
        return (
            <Card className= {"border border-dark bg-dark text-white"}>
               <Card.Header>JEWELRY</Card.Header>
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
      <td>$65</td>
      <td>Black</td>
      <td>Copper</td>
      <td>Large</td>
      <td>Obsidian</td>
    </tr>
    
  </tbody>

                   </Table>
               </Card.Body>
            </Card>

        );
    }
}

