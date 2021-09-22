import React, { Component } from 'react';
import { Media } from 'reactstrap';
import Species from './SpeciesComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.species.map((sp) => {
            return (
                <div key={sp.id} className="col-12 mt-5">
                    <Media tag="li" className="row">
                        <Media left middle className="col-5">
                            <Media object src={sp.image} alt={sp.name} />
                        </Media>
                        <Media body className="col-7">
                            <Media heading>{sp.name}</Media>
                            <p>{sp.description}</p>
                            <Species species = {sp.types} />
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
           <div className="container"> 
                   <Media list>
                       {menu}
                   </Media>
           </div>
        );
    }
}
export default Menu;