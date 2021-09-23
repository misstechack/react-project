import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

  function RenderToast({type}) {
    return(
        <Toast>
            <ToastHeader>{type.name}</ToastHeader>
            <ToastBody>{type.description}</ToastBody>
        </Toast>
    );
  }

  const Type = (props) => {
    if(props.type != null) {
        return(
        <RenderToast type={props.type} />
        );
    } else {
        return(<div></div>);
    }
  }
   export default Type;