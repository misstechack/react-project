import React, {Component} from 'react';
import { Jumbotron, Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {

    render () {
        return (
            <>
            <Navbar dark sticky="top">
                <div className="container">
                    <NavbarBrand href="/">
                    Be Kind To Every Kind
                    </NavbarBrand>
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