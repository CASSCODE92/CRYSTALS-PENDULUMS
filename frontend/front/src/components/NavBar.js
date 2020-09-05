import React from 'react';

import{NavBar, Nav} from 'react-bootstrap' ;

class NavBar extends React.Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
            <img src="%PUBLIC_URL%/favicon.ico" width="25" height="25" alt="brand"/> CRYSTALS & PENDULUMS</Navbar.Brand>
            </NavBar.Brand>
            <Nav className="pages">
            <Nav.Link href="#">Item Upload</Nav.Link>
            <Nav.Link href="#">Crystals</Nav.Link>
            <Nav.Link href="#">Jewelry</Nav.Link>
            <Nav.Link href="#">Pendulums</Nav.Link>
          </Nav>
        </Navbar>


    );

  }

}

export default NavBar;



