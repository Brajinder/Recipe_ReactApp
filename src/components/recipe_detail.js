import React, { Component } from 'react'
import {recipe} from './temp';
import {Link} from 'react-router-dom';


export default class recipe_detail extends Component {
    

    state={
        recipes: [],   
        loading: false

        }
 async componentDidMount () {

    const {match: {params} }= this.props;   

    
   
         try {
           const url=`https://www.food2fork.com/api/get?key=e37083b85bac101f025b576a0c9cddc4&rId=${params.id}`;

              const api_data= await fetch(url);
                      // it is only to call api, not to get data from it;
                      // fetch allows us to make HTTP request to food2forks API;
                  
                     const api_data_json= await api_data.json();    // getting data from api;
                    this.setState({recipes: api_data_json.recipe,
                    loading: true
                    });
                      }
                      catch (error) {

                        console.log(error);
                      }                      
        }
    
    render() {
        console.log(this.props);

       
        const {
            image_url,
            title,
            source_url,
            publisher,
            publisher_url,
            ingredients

        }= this.state.recipes;
        const {handleIndex}= this.props;

        return (
           <React.Fragment>
           { !this.state.loading ? <h1 className="text-slanted text-capitalize container ">Loading</h1> : 
           <div className="container">
           <div className="row">
           <div className="col-10 mx-auto col-md-6 my-3">
           <button type="button" className="btn btn-warning text-capitalize my-2"><Link to="/">back to recipes</Link></button>
           <img src={image_url} alt="recipe" className="mt-3 w-100 mr-4"/>
           </div>
           <div className="col-10 mx-auto col-md-6 my-3">
           <h6 className="text-capitalize mt-4 text-slanted">
           {title}
           </h6>
           <div className="my-4 text-slanted text-warning">
           provided by :{publisher}
           </div>
           <button type="button" className="btn btn-success"><a href={source_url}>Source</a></button>
           <button type="button" className="btn btn-danger ml-3"><a href={publisher_url}>Publisher</a></button>
           <ul className="list-group mt-4">
           <h2 className="mt-3 mb-4">Ingredients
           </h2>
           {
               ingredients.map((item, index) => {
                   return (
                          <li key={index} className="list-group-item text-slanted">
                          {item}
                          </li>
                   )
               })
           }
           </ul>
           </div>
           </div>
           </div>
        }
           
           </React.Fragment>
        )
    }
}
