import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render () {
        return (
            <>
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
                                    <span className="fa fa-info fa-lg"></span>
                                    <span> About us </span>
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
                                    <span> Contact us </span>
                                </NavLink>
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