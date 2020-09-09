import React, {Component} from 'react';

import {Card, Table} from 'react-bootstrap';
import obsidian from '../Assets/crystal-images/obsidian.jpg'


export default class Jewelry extends Component {

    render () {
        return (
            <div>
                <img className="obsidian" src={obsidian}></img>
               
            <Card className= "model-two">
                <div className="table-two">
                    <div>
               <Card.Header>JEWELRY</Card.Header>
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
      <td>$65</td>
      <td>Black</td>
      <td>Copper</td>
      <td>Large</td>
      <td>Obsidian</td>
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

