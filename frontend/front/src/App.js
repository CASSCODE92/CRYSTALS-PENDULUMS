import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Welcome';
import Crystals 
import Mission from './components/Welcome';
import Mission from './components/Welcome';
import Mission from './components/Welcome';
import Jewelry from './components/Jewelry';

function App() {
  const marginTop = {
    marginTop:"20px"
  };
  return (
    <Router>
     <NavBar/>
     <Container>
       <Row>
         <Col lg={12} style={marginTop}>
           <Crystals/>
           <Jewelry/>
           <Pendulums/>
           <ItemUpload/>
         </Col>
       


       </Row>
     </Container>
     <Footer/>
    </Router>
  );
}

export default App;