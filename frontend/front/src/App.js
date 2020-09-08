import React from 'react';
import './App.css';
// import {Footer} from 'react-bootstrap/Footer';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ItemUpload from './components/ItemUpload';
import Crystals from './components/Crystals';
import Jewelry from './components/Jewelry';
import Pendulums from './components/Pendulums';
// import Year from './components/Year';

function App() {
  const marginTop = {
    marginTop:"20px"
  };
  return (
    <div>
    <Router>
     <NavBar/>
     <Container>
       <Row>
         <Col lg={12} style={marginTop}>
           <Switch>
            <Route path="/welcome" exact component= {Welcome}/>
            <Route path="/crystals" exact component= {Crystals}/>
            <Route path="/jewelry" exact component= {Jewelry}/>
            <Route path="/pendulums" exact component= {Pendulums}/>
            <Route path="/itemupload" exact component= {ItemUpload}/>
            {/* <Route path="/itemupload" exact component= {Year}/> */}
            
           
           </Switch>
           
         </Col>
       


       </Row>
     </Container>
     {/* <Footer/> */}
    </Router>
    </div>
  );
}

export default App;