import React from 'react';

import {NavBar, Container, Col} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        
        let fullYear = new Date () .getFullYear ();

        return (
            <div>
            <NavBar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear} - {fullYear + 1}</div>
                        </Col>
                </Container>
            </NavBar>

            </div>
        )
    }
}

export default Footer;