import React, {Component} from 'react';
import { Media } from 'reactstrap';
import { TEAM } from '../shared/team';
import { Card, CardImg, Col, Row } from 'reactstrap';
import Leader from './LeaderComponent';
import { Link } from 'react-router-dom';

class Team extends Component {

    constructor(props) {
        super(props);

        this.state = {
            team: TEAM,
            selectedLeader: null
        }
    }

    onLeaderSelect(leader) {
        this.setState({selectedLeader: leader});
      }

    render() {
        const team = this.state.team.map(
            (leader) => {
                return(
                    <Col sm="2">
                        <Card key={leader.id} onClick={() => this.onLeaderSelect(leader)}>
                            <Link to={`/about/leader/${leader.id}`}>
                                <CardImg className="teamImg" src={leader.image} alt={leader.name} />
                            </Link>
                        </Card>
                    </Col>
                );
            }
        );
        return(
            <div className="container">
                <h3>Our Team</h3>
                <hr />
                <Row>
                    {team}
                </Row>
                <br />
                <Media list>
                    <Leader leader={this.state.selectedLeader} />
                </Media>
            </div>
        );
    }
}
export default Team;