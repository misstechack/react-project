import React from 'react';
import { Link } from 'react-router-dom';

function RenderFooter(props) {

        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-sm-8">
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="category">Category</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-10 col-sm-4">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a className="btn btn-social-icon btn-facebook" href="http://facebook.com">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com">
                                    <i className="fa fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <p>© Copyright 2021 Be Kind To Every Kind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}
export default RenderFooter;