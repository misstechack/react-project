import React, { Component } from 'react';
import Menu from './MenuComponent';
import { SPECIES } from '../shared/species';
import Header from './HeaderComponent';
import RenderFooter from './FooterComponent';


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
        <Header/>
        <Menu species={this.state.species} />
        <RenderFooter/>
      </div>
    );
  }
}

export default Main;