import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Location</h3>
                </div>
                <hr/>
                <div className="col-12 col-sm-4 offset=sm-1">
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
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our location</h5>
                </div>
            </div>
        </div>
    );
}
export default Contact;