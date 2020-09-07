import React from 'react';

import{NavBar, Nav} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark">
          <Link to={""} className="navbar-brand">
          <img src="%PUBLIC_URL%/favicon.ico" width="25" height="25" alt="brand"/> CRYSTALS & PENDULUMS</Navbar.Brand>
          </Link>
        
            <Nav className="pages">
            <Link to={"crystals"} className="nav-link">CRYSTALS</Link>
            <Link to={"jewelry"} className="nav-link" >JEWELRY</Link>
            <Link to={"pendulums"} className="nav-link" >PENDULUMS</Link>
            <Link to={"item"} className="nav-link" >ITEM UPLOAD</Link>
          </Nav>
        </Navbar>


    );

  }

}

export default NavBar;



