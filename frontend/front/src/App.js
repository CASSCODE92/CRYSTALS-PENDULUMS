import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';

import NavBar from './components/NavBar';
import Mission from './components/Welcome';

function App() {
  const marginTop = {
    marginTop:"20px"
  };
  return (
    <div className="App">
     <NavBar/>
     <Container>
       <Row>
         <Col lg={12} style={marginTop}>
           <Mission/>
         </Col>
       


       </Row>
     </Container>
    </div>
  );
}

export default App;