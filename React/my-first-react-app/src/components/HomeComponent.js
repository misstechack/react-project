import React, { Component } from 'react';
import { Card, CardFooter, CardText, CardImg, Col, Row } from 'reactstrap';
import { Loading } from './LoadingComponent';
import Newsletter from './NewletterComponent';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            speciesLoading: this.props.speciesLoading,
            speciesFailed: this.props.speciesFailed,
            species: this.props.species,
            resetNewsletterForm: this.props.resetNewsletterForm
        }
    }

    render() {
        if(this.state.speciesLoading) {
            return(
                <Loading />
            );
        } 
        else if(this.state.speciesFailed) {
            return(
                <h4>{this.state.speciesFailed}</h4>
            );
        }
        else {
            const home = this.state.species.map((sp) => {
                return(
                    <Col sm="6">
                        <br />
                        <Card key={sp.id}>
                            <CardImg src={sp.image} alt={sp.name} />
                            <CardFooter>{sp.name}</CardFooter>
                        </Card>
                        <CardText>{sp.description}</CardText>
                        <br />
                    </Col>
                );
            })
            return (
                <div className="container">
                    <Row>
                        {home}
                    </Row>
                    <Newsletter resetNewsletterForm={this.state.resetNewsletterForm}/>
                </div>
            );
        }
    }
}
export default Home;