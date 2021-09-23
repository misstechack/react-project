import React, { Component } from 'react';
import Menu from './MenuComponent';
import { SPECIES } from '../shared/species';
import Header from './HeaderComponent';
import RenderFooter from './FooterComponent';
import Home from './HomeComponent';
import { Redirect, Route, Switch } from 'react-router';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: SPECIES
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu species={this.state.species} />} />
          <Redirect to="/home" />
        </Switch>
        <RenderFooter/>
      </div>
    );
  }
}

export default Main;