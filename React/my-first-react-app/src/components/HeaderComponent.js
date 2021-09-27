import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Collapse, Form, FormGroup, Input, Label, Jumbotron, Modal, ModalBody, 
        ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render () {
        return (
            <>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input} />
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input} />
                                Remember me
                            </Label>
                        </FormGroup>

                        <Button type="submit" value="submit">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand href="/">
                    <img class="logo" src='assets/images/logo.jpg' alt="Be Kind To Every Kind" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <span className="fa fa-home fa-lg"> </span>
                                    <span> Home </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'>
                                    <span className="fa fa-info-circle fa-lg"></span>
                                    <span> About Us </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/category'>
                                    <span className="fa fa-list fa-lg"></span>
                                    <span> Category </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'>
                                    <span className="fa fa-address-card fa-lg"></span>
                                    <span> Contact Us </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span>
                                    <span>  Login </span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1>Be Kind to Every Kind</h1>
                                <p>
                                    Those who protect and save other lives lead the way in protecting and saving humanity and earth. Let's create a life free from fear!!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }

}
export default Header;