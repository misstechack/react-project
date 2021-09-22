import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardImg,CardText, Col, Media, Row, Toast, ToastBody, ToastHeader } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedType: null
        }
    }

    onTypeSelect(type) {
        this.setState({selectedType: type});
    }

    renderType(type) {
        if(type != null) {
            return(
                <Toast>
                    <ToastHeader>{type.name}</ToastHeader>
                    <ToastBody>{type.description}</ToastBody>
                </Toast>
            );
        } else {
            return(<div></div>);
        }
    }

    render() {
        const menu = this.props.species.map((sp) => {
            return (
                <div key={sp.id} className="col-12 mt-5">
                    <Media tag="li" className="row">
                        <Media left middle className="col-5">
                            <Media object src={sp.image} alt={sp.name} />
                        </Media>
                        <Media body className="col-7 ml-5">
                            <Media heading>{sp.name}</Media>
                            <p>{sp.description}</p>
                            <Row>
                                {
                                    sp.types.map((type) => {
                                        return(
                                            <Col sm="3">
                                                <Card key={type.id} onClick={() => this.onTypeSelect(type)}>
                                                    <CardImg src={type.image} alt={type.name} />
                                                    <CardFooter>{type.name}</CardFooter>
                                                </Card>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
           <div className="container"> 
                <div className="col-10">
                    {this.renderType(this.state.selectedType)}
                </div>
                   <Media list>
                       {menu}
                   </Media>
           </div>
        );
    }
}
export default Menu;