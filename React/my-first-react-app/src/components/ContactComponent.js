import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
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
        </div>
    );
}
export default Contact;