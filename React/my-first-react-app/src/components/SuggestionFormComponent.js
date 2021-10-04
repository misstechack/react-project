import { Component, React } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

class SuggestionForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return(
            <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 mt-5 ">
                    <h3>Share your suggestions</h3>
                </div>
                <div className="col-12 col-md-12">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="suggestion" md={2}>Suggestion</Label>
                            <Col md={10}>
                                <Control.textarea model=".suggestion" id="suggestion" name="suggestion" 
                                    placeholder="Your suggestions" className="form-control"  />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit">
                                    <span>Share  </span>
                                    <span className="fa fa-arrow-circle-right fa-lg"></span>
                                </Button>                                
                            </Col>
                            </Row>
                    </LocalForm>
                </div>
            </div>
        </div>
        );
    }
}
export default SuggestionForm;