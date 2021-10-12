import React, { Component } from 'react';
import { Card, CardFooter, CardImg, Col, Row } from 'reactstrap';
import { TYPES } from '../shared/types';
import Type from './TypeComponent.js';
import { FadeTransform } from 'react-animation-components';

class Species extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedType: null,
      types: TYPES
    }
  }

  onTypeSelect(type) {
    this.setState({selectedType: type});
  }

  render() {
    const species_type = this.state.types.filter((type) => type.speciesId === this.props.spId).map((type) => { 
        return (
        <Col sm="3">
           <FadeTransform in transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
            <Card key={type.id} onClick={() => this.onTypeSelect(type)}>
                <CardImg src={type.image} alt={type.name} />
                <CardFooter>{type.name}</CardFooter>
            </Card>
            </FadeTransform>
        </Col>
         );
    });

    return(
        <div>
          <Row>
            {species_type}
          </Row>
          <Type type={this.state.selectedType} />
        </div>
    );
  }
}

export default Species;