import { Component, React } from 'react';
import DisplaySuggestion from './DisplaySuggestionComponent';
import SuggestionForm from './SuggestionFormComponent';

class SaveWildlife extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: props.suggestions
        }
    }

    render() {
        return(
            <div className="container">
                <DisplaySuggestion suggestions={this.state.suggestions} />
                <SuggestionForm />
            </div>
        );
    }
}
export default SaveWildlife;