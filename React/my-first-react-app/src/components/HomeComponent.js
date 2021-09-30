import React from 'react';
import { Card, CardFooter, CardText, CardImg, Col, Row } from 'reactstrap';
import Newsletter from './NewletterComponent';

function Home(props) {
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
export default Home;