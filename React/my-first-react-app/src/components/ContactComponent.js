import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Label, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            flag: false,
            contactType: 'Phone',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                phone: false,
                email: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(event) {
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
    }

    validate(firstname, lastname, phone, email) {
        const errors = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
        }

        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be greater than 3 characters';
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be less than 10 characters';

        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be greater than 3 characters';
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be less than 10 characters';

        const regExp = /^\d+$/;
        if(this.state.touched.phone && !regExp.test(phone))
        errors.phone = 'Phone Number should contain only numbers';
        if(this.state.touched.phone && phone.length !== 10)
        errors.phone = 'Phone Number should contain only 10 numbers';

        if(this.state.touched.email && 
            (email.split('').filter(x => x === '@').length !== 1 ||
            email.split('').filter(x => x === '.').length !== 1) )
        errors.email = 'Email should consist of a @ and a dot';
        
        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.phone, this.state.email);
        return(
            <div className="container mt-5 mb-5">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div>
                        <h3>Contact Us</h3>
                    </div>
                    <hr/>
                    <div className="col-4 col-sm-4 offset=sm-1">
                        <h5>Address</h5>
                        <address>
                        BKTEK
                        3rd Floor, No.38/4, Adjacent to Dell EMC2,<br/>
                        Dodanekundi, Outer Ring Road, Bengaluru,<br/>
                        Karnataka - 560048.<br/>
                        <i className="fa fa-phone"></i>  +91-9606058406<br/>
                        <i className="fa fa-envelope"></i><a href="info@bktek.co">  info@bktek.co</a>
                        </address>
                    </div>
                    <div className="col-10 col-sm-6 offset-sm-2">
                        <h5>Map of our location</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5 ">
                        <h3>Send us your Feedback!!</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                        value={this.state.firstname}  
                                        valid={errors.firstname === ''} invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')} 
                                        onChange={this.handleInputChange}  />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname} 
                                        valid={errors.lastname === ''} invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')} 
                                        onChange={this.handleInputChange}  />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="phone" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phone" name="phone" placeholder="Phone Number"
                                        value={this.state.phone} 
                                        valid={errors.phone === ''} invalid={errors.phone !== ''}
                                        onBlur={this.handleBlur('phone')} 
                                        onChange={this.handleInputChange}  />
                                    <FormFeedback>{errors.phone}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email"
                                        value={this.state.email} 
                                        valid={errors.email === ''} invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')} 
                                        onChange={this.handleInputChange}  />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="flag"
                                            checked={this.state.flag} onChange={this.handleInputChange} />
                                            {'   '}
                                            <span>May we contact you?</span>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset: 1}}>
                                    <Input type="select" id="contactType" name="contactType"
                                        value={this.state.contactType} onChange={this.handleInputChange} >
                                            <option>Phone</option>
                                            <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <br />
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" placeholder="Message"
                                        rows="12" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit">
                                        <span>Send  </span>
                                        <span className="fa fa-arrow-circle-right fa-lg"></span>
                                    </Button>                                
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );    
    }
}
export default Contact;