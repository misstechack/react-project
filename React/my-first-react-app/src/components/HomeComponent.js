import React from 'react';
import { Card, CardFooter, CardText, CardImg, Col, Row } from 'reactstrap';
import { Loading } from './LoadingComponent';
import Newsletter from './NewletterComponent';

function Home(props) {
    if(props.speciesLoading) {
		return(
			<Loading />
		);
	} 
	else if(props.speciesFailed) {
		return(
			<h4>{props.speciesFailed}</h4>
		);
	}
	else {
        const home = props.species.map((sp) => {
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
                <Newsletter/>
            </div>
        );
    }
}
export default Home;