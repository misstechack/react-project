import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Species from './SpeciesComponent';
import { Link } from 'react-router-dom';

function RenderCategory({sp}) {
    return (
        <Media tag="li" className="row">
            <Media left middle className="col-lg-5 col-md-6 col-sm-6">
                <Media object src={sp.image} alt={sp.name} />
            </Media>
            <Media body className="col-7">
                <Media heading>{sp.name}</Media>
                <p>{sp.description}</p>
                <Species spId = {sp.id} />
            </Media>
        </Media>
    );
}

const Category = (props) => {
    const category = props.species.map((sp) => {
        return (
            <div key={sp.id} className="col-12 mt-5">
               <RenderCategory sp={sp} />
            </div>
        );
    });
    return (
       <div className="container mt-5 mb-5"> 
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Category</BreadcrumbItem>
                </Breadcrumb>
                <div>
                    <h3>Category</h3>
                </div>
                <hr/>
            </div>
            <Media list>
                {category}
            </Media>
       </div>
    );
}
export default Category;