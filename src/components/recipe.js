import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class recipe extends Component {

    render() {
        const {
            image_url,
            title,
            source_url,
            publisher,
            recipe_id

        }= this.props.recipe;
        const {handleDetail}= this.props;
        return (
            <React.Fragment>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
            <img src={image_url} className="img-card-top" style={{height:"14rem"}} 
            alt="Sorry"/>
            <div className="card-body text-capitalize">
            <h6>{title.length<20 ? `${title}`: `${title.substring(0,20)}...`}</h6>
            <h6 className="text-slanted text-success">
            provided by {publisher}
            </h6>
            </div>
            <div className="card-footer">
            <button className="btn btn-outline-danger text-capitalize text-slanted"><Link to={`/recipe/${recipe_id}`}>detail</Link></button>
            <button className="btn btn-outline-success text-capitalize text-slanted float-right"><a href ={source_url} target="_blank" rel="noopener noreferrer">get recipe</a></button>
            </div>
            </div>
            </div>
           
            </React.Fragment>
        )
    }
}
