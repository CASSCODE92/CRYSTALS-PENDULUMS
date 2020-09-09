import React from 'react';
import './App.css';
// import {Footer} from 'react-bootstrap/Footer';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import ItemUpload from './components/ItemUpload';
import Crystals from './components/Crystals';
import Jewelry from './components/Jewelry';
import Pendulums from './components/Pendulums';
// import Year from './components/Year';

function App() {
 
 
  return (
    <Router>
            <div className= "pages">
      <nav className="nav-bar">
          <h1 className= "title">CRYSTALS & PENDULUMS</h1>
          {/* <img src="%PUBLIC_URL%/favicon.ico" width="25" height="25" alt="brand"/> */}
          <ul className="across">
        
        
            <li><Link to="/Welcome">WELCOME</Link></li>
            <li><Link to="/Crystals">CRYSTALS</Link></li>
            <li><Link to="/Jewelry">JEWELRY</Link></li> 
            <li><Link to="/Pendulums">PENDULUMS</Link></li> 
            <li><Link to="/ItemUpload">ITEM UPLOAD</Link></li>
            </ul>    
            
          </nav>
        
          <Switch>
            <Route path='/Welcome'><br/><br/>
            <Welcome />
            </Route>
            <Route path='/Crystals'><br/><br/>
                <Crystals />
                </Route>
            <Route path='/Jewelry'><br/><br/>
                <Jewelry />
                </Route>
            <Route path='/Pendulums'><br/><br/>
                <Pendulums />
                </Route>
            <Route path='/ItemUpload'><br/><br/>
                <ItemUpload />
                
            </Route>
            </Switch>

            




        </div>

        </Router>

   
  );
}

export default App;