import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

class Type extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.type != null) {
        return(
            <Toast>
                <ToastHeader>{this.props.type.name}</ToastHeader>
                <ToastBody>{this.props.type.description}</ToastBody>
            </Toast>
        );
    } else {
        return(<div></div>);
    }
  }
}

export default Type;