import React from 'react';

import{NavBar} from 'react-bootstrap' ;

class NavBar extends React.Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src="%PUBLIC_URL%/favicon.ico" width="25" height="25" alt="brand"/> CRYSTALS & PENDULUMS</Navbar.Brand>

      </NavBar>
    );

  }

}

export default NavBar;



