import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { SPECIES } from '../shared/species';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: SPECIES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary" sticky="top">
          <div className="container">
            <NavbarBrand href="/">
              Be Kind To Every Kind
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu species={this.state.species} />
      </div>
    );
  }
}

export default Main;