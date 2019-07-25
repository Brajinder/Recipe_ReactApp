import React, { Component } from 'react'

export default class recipe_search extends Component {

render() {
    const {handleChange, handleSubmit, value} =this.props;
    
        return (
            <React.Fragment>
            <div className="container">
            <div className="text-slanted text-capitalize justify-content-center mb-3 abc">
            Search the recipe with <div className="text-danger text-capitalize"><strong>food2forks api </strong> </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="form-inline justify-content-center sticky-top">
            <input type="text" className="form-control mr-2" name="name" placeholder="apple,orange,kiwi" value={value} onChange={handleChange}/>
            <button className="btn btn-success pr-3 text-slanted">Search</button>
            </div>
            </form>

            </div>
        
            </React.Fragment>
        )
    }
}
