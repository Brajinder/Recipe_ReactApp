import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Recipedetail from './recipe_detail';

import App from "../App";

const Router =()=> {
    return (

    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/recipe/:id" component={Recipedetail}/>


    </Switch>
    </BrowserRouter>
    )
}

export default Router;