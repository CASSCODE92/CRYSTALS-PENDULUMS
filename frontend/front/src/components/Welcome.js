import React from'react';

import {Jumbotron} from 'react-bootstrap';

class Welcome extends React.Component {
    render() {
        return (
            <div>
            <Jumbotron className="bg-dark text-white">
  <h1 className="statement">MISSION STATEMENT</h1>
  <p className="paragraph">
  Crystals have been appreciated for their physical appearances and metaphysical healing properties since antiquiqity. Though they tend to manifest within the parameters of certain frequencies (based on type), they naturally tune to and interact with outside energies. They can also be altered by intentional energetic channeling.

Our goal is to make tools for internal  healing and direction more accessible to the general population by creating a platform in which people are able to redistribute their crystals, stones, and pendulums.

  </p>
  
</Jumbotron>

</div>

        );
    }
}

export default Welcome;