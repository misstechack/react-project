import React from 'react';
import { Card, CardBody,CardHeader } from 'reactstrap';
import Leader from './LeaderComponent';

const About = (props) => {
    return(
        <div className="container mt-5 mb-5">
            <Card>
                <CardHeader><b>About BKTEK</b></CardHeader>
                <CardBody>
                    “Conservation endures as a living discipline because it is inhabited by a magnificent collection of people. Only by working together can we create solutions to the most vexing problems we face.”
                    <br/>
                    BKTEK works to help local communities conserve the natural resources they depend upon; transform markets and policies toward sustainability; and protect and restore species and their habitats. Our efforts ensure that the value of nature is reflected in decision-making from a local to a global scale.
                </CardBody>
            </Card>
            <Leader/>
        </div>
    );
}

export default About;