import React from 'react';
import { Media } from 'reactstrap';

  function RenderLeader({leader}) {
      console.log(leader);
    return(
        <Media tag="li" className="row leader-card">
            <Media left middle className="col-lg-4 col-md-6 col-sm-6">
                <Media object className="leaderImg" src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="col-7">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
            </Media>
        </Media>
    );
  }

  const Leader = (props) => {
    if(props.leader != null) {
        return(
            <div>
                <h4>Leader Details</h4>
                <hr />
                <br />
                <RenderLeader leader={props.leader} />
            </div>
        );
    } else {
        return(<div></div>);
    }
  }
   export default Leader;