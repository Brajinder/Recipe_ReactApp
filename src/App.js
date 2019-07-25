import React, { Component } from 'react';

import './App.css';
import RecipeList from './components/recipe_list';
import Recipedetail from './components/recipe_detail';

class Abc extends Component {

  state={
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=e37083b85bac101f025b576a0c9cddc4",
    base_url: "https://www.food2fork.com/api/search?key=e37083b85bac101f025b576a0c9cddc4",
    id_detail: 35382,
    search:"",
    query:"&q=",
    error:"",
    loading: false
    

  }
  
  async getRecipe () {
    try {
      const api_data= await fetch(this.state.url);
      // it is only to call api, not to get data from it;
      // fetch allows us to make HTTP request to food2forks API;
  
     const api_data_json= await api_data.json();    // getting data from api;

     if (api_data_json.recipes.length === 0)
     {
       this.setState({
         error:'Oops What Are You Trying For',
         recipes:[]
        
       })
     }
     else {
      this.setState({recipes: api_data_json.recipes
      
      });
      }
      }
      catch (error) {
        console.log(error);
      }  
    
  }

  componentDidMount() {
    this.getRecipe();
  }
 

handleChange =(e) => {
    this.setState ({
      search:e.target.value
      })
     }
  
  handleSubmit =(e)=> {
    e.preventDefault();
  
    const {base_url, query, search}= this.state;  // why de-structuring is done  
     this.setState({
       url: `${base_url}${query}${search}`,
       search:'',
       error:''
  
     }, () => {
       this.getRecipe();
  
     })
  }
  

            
render() {
    console.log(this.state.recipes);
    
  return (
   <React.Fragment>

   <RecipeList recipes={this.state.recipes} 
   handleSubmit={this.handleSubmit} 
   handleChange={this.handleChange}
   value={this.state.search} 
   error={this.state.error}/> 
 </React.Fragment>
    );
  }
}
export default Abc
