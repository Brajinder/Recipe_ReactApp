import React, { Component } from 'react'
import Recipe from './recipe';
import Recipesearch from './recipe_search';
//import Photo from './img/market-peppers.jgp';

export default class recipe_list extends Component {
    
    render() {
        

        const {recipes, handleDetail, handleChange, handleSubmit, error, value}= this.props;
        return (
            
            <React.Fragment>
            
            <div className="container">

            <Recipesearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />

            {error ? <h1 className="text-slanted text-capitalize text-danger mt-5 justify-content-center">{error} </h1> : 

         <div className="row"> 
         {      
         
           recipes.map(recipe => {
               return (
               <Recipe 
               key = {recipe.recipe_id} recipe = {recipe}/> 
               )
           })
         
        }
        
         </div>
        }
         </div>
     </React.Fragment>
        )
    }
}
