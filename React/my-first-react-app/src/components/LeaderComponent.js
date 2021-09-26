import React, {Component} from 'react';
import { Media } from 'reactstrap';
import { TEAM } from '../shared/team';

class Leader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            team: TEAM
        }
    }

    render() {
        const team = this.state.team.map(
            (leader) => {
                return(
                    <div key={leader.id} className="col-12">
                        <Media tag="li" className="row leader-card">
                            <Media left middle className="col-lg-4 col-md-6 col-sm-6">
                                <Media object className="leaderImg" src={leader.image} alt={leader.name} />
                            </Media>
                            <Media body className="col-7">
                                <Media heading>{leader.name}</Media>
                                <p>{leader.designation}</p>
                            </Media>
                        </Media>
                        <hr />
                    </div>
                );
            }
        );
        return(
            <div className="container">
                <h3>Our Team</h3>
                <hr />
                <Media list>
                    {team}
                </Media>
            </div>
        );
    }
}
export default Leader;