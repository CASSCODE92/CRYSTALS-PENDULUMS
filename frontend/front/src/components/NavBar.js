import React, {Component} from 'react';


import{NavBar} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render () {
    return (
        <div>
      <Navbar bg="dark" variant="dark">
          <Link to={""} className="navbar-brand">
          <img src="%PUBLIC_URL%/favicon.ico" width="25" height="25" alt="brand"/>
          </Link>
        
            <Nav className="pages">
            <Link to={"welcome"} className="nav-link">WELCOME</Link>   
            <Link to={"crystals"} className="nav-link">CRYSTALS</Link>
            <Link to={"jewelry"} className="nav-link" >JEWELRY</Link>
            <Link to={"pendulums"} className="nav-link" >PENDULUMS</Link>
            <Link to={"item"} className="nav-link" >ITEM UPLOAD</Link>
          </Nav>
        </Navbar>

        </div>


    );

  }

}

export default NavBar;



