import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Category from './CategoryComponent';
import Header from './HeaderComponent';
import RenderFooter from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Leader from './LeaderComponent';
import SaveWildlife from './SaveWildlifeComponent';
import { addSuggestion, fetchSpecies } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
  return {
    species: state.species,
    leaders: state.leaders,
    suggestions: state.suggestions
  }
}

const mapStateToDispatch = (dispatch) => ({
  addSuggestion: (author, message) => dispatch(addSuggestion(author, message)),
  fetchSpecies: () => { dispatch(fetchSpecies())},
  resetNewsletterForm: () => {dispatch(actions.reset('newsletter'))}
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchSpecies();
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
        species={this.props.species.species.filter((sp) => sp.featured)} 
        speciesLoading={this.props.species.isLoading}
		    speciesFailed={this.props.species.errormsg}
        resetNewsletterForm={this.props.resetNewsletterForm}
        />
      );
    }
    const LeaderWithId = ({match}) => {
      return(
        <div className="container mt-5 mb-5">
          <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                      <BreadcrumbItem><Link to="/about">About</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Team Leaders</BreadcrumbItem>
                  </Breadcrumb>
              </div>
          <Leader leader={this.props.leaders.filter((leader) => leader.id === parseInt(match.params.leaderId, 10))[0]} />
        </div>
      );
    }
    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch location={this.props.location}>
              <Route path="/home" component={HomePage} />
              <Route exact path="/category" component={() => <Category species={this.props.species.species} />} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route path="/about/leader/:leaderId" component={LeaderWithId} />
              <Route path="/savewildlife" component={() => <SaveWildlife 
              suggestions={this.props.suggestions} addSuggestion={this.props.addSuggestion} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        
        <RenderFooter/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Main));