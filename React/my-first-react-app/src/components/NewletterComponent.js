import React, { Component } from 'react';
import { Button, Input, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,4}$/i.test(val);

class Newsletter extends Component {

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
                        <h3>Subscribe to our Newsletter</h3>
                    </div>
                    <div className="col-12 col-md-12">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" 
                                        placeholder="Email" className="form-control" 
                                        validators={{ 
                                            required,
                                            minLength: minLength(6),
                                            maxLength: maxLength(20),
                                            validEmail
                                        }}/>
                                        <Errors className="text-danger"
                                            model=".email" show="touched"
                                            messages= {{
                                                required: ' * Required * ',
                                                minLength: ' * Must contain greater than 5 characters * ',
                                                maxLength: ' * Must contain less than 20 characters * ',
                                                validEmail: ' * Invalid Email Address * '
                                            }} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                            className="form-check-input" />
                                            {'   '}
                                            <strong>By signing up, you will receive emails about BKTEK events and updates.</strong>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit">
                                        <span>Subscribe  </span>
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
export default Newsletter;