import React from 'react';
import { Media } from 'reactstrap';

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
            <div key={suggestion.id} className="col-12 mt-5">
               <RenderSuggestion suggestion={suggestion} />
            </div>
        );
  });
  return(
    <div className="container mt-5 mb-5">
        <h4>Suggestions</h4>
        <hr />
        <Media list>
            {suggestion}
        </Media>
    </div>
  );
}
export default DisplaySuggestion;