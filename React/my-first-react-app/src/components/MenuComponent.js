import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            species: [
            {
                id: 0,
                name: 'Birds',
                image: 'assets/images/birds.jpg',
                description: 'Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.'
            },
            {
                id: 1,
                name: 'Carnivores',
                image: 'assets/images/carnivore-mammal.jpg',
                description: 'A carnivore, meaning "meat eater", is an animal whose food and energy requirements derive solely from animal products whether through hunting or scavenging.'
            },
            {
                id: 2,
                name: 'Herbivores',
                image: 'assets/images/herbivore-mammal.jpg',
                description: 'A herbivore is an animal anatomically and physiologically adapted to eating plant material, for example foliage or marine algae, for the main component of its diet.'
            },
            {
                id: 3,
                name: 'Omnivores',
                image: 'assets/images/omnivore-mammal.jpg',
                description: 'An omnivore is an animal that has the ability to eat and survive on both plant and animal matter.'
            },
            {
                id: 4,
                name: 'Reptiles',
                image: 'assets/images/reptiles.jpg',
                description: 'Reptiles are cold-blooded vertebrates. (Vertebrates have backbones.) They have dry skin covered with scales or bony plates and usually lay soft-shelled eggs.'
            }
        ],
        };
    }
    render() {
        const menu = this.state.species.map((sp) => {
            return (
                <div key={sp.id} className="col-12 mt-5">
                    <Media tag="li" className="row">
                        <Media left middle className="col-5">
                            <Media object src={sp.image} alt={sp.name} />
                        </Media>
                        <Media body className="col-7 ml-5">
                            <Media heading>{sp.name}</Media>
                            <p>{sp.description}</p>
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