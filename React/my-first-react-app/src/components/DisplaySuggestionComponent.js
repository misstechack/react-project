import React from 'react';
import { Media } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

  function RenderSuggestion({suggestion}) {
    console.log(suggestion);
    return(
        <Media tag="li" className="row suggestion-card">
            <Media body className="col-7">
                <Media heading>{suggestion.author}</Media>
                <Media sub-heading><b>{suggestion.date}</b></Media>
                <p>{suggestion.message}</p>
            </Media>
        </Media>
    );
  }

  const DisplaySuggestion = (props) => {
    const suggestion = props.suggestions.map((suggestion) => {
        return (
          <Fade in>
            <div key={suggestion.id} className="col-12 mt-5">
               <RenderSuggestion suggestion={suggestion} />
            </div>
          </Fade>
        );
  });
  return(
    <div className="container mt-5 mb-5">
        <h4>Suggestions</h4>
        <hr />
        <Media list>
          <Stagger in>
            {suggestion}
          </Stagger>
        </Media>
    </div>
  );
}
export default DisplaySuggestion;