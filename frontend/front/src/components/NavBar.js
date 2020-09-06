import React from 'react';

import{NavBar, Nav} from 'react-bootstrap' ;

class NavBar extends React.Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
            <img src="%PUBLIC_URL%/favicon.ico" width="25" height="25" alt="brand"/> CRYSTALS & PENDULUMS</Navbar.Brand>
            </Navbar.Brand>
            <Nav className="pages">
            <Nav.Link href="#">CRYSTALS</Nav.Link>
            <Nav.Link href="#">JEWELRY</Nav.Link>
            <Nav.Link href="#">PENDULUMS</Nav.Link>
            <Nav.Link href="#">ITEM UPLOAD</Nav.Link>
          </Nav>
        </Navbar>


    );

  }

}

export default NavBar;



