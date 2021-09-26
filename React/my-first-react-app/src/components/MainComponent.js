import React, { Component } from 'react';
import Menu from './MenuComponent';
import { SPECIES } from '../shared/species';
import Header from './HeaderComponent';
import RenderFooter from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Redirect, Route, Switch } from 'react-router';
import About from './AboutComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: SPECIES,
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home species={this.state.species.filter((sp) => sp.featured)} />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/category" component={() => <Menu species={this.state.species} />} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
        <RenderFooter/>
      </div>
    );
  }
}

export default Main;