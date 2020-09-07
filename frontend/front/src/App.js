import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ItemUpload from './components/ItemUpload';
import Crystals from './components/Crystals';
import Jewelry from './components/Jewelry';
import Pendulums from './components/Pendulums';

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
           <Switch>
            <Route path="" exact component= {Welcome}/>
            <Route path="" exact component= {Crystals}/>
            <Route path="" exact component= {Jewelry}/>
            <Route path="" exact component= {Pendulums}/>
            <Route path="" exact component= {ItemUpload}/>
           
           </Switch>
           </>
           </>
           </>
           </>
           </>
         </Col>
       


       </Row>
     </Container>
     <Footer/>
    </Router>
  );
}

export default App;