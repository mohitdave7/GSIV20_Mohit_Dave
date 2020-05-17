import React, { Component } from 'react';
import Home from "./components/home"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MovieData from "./components/MovieData"


class Routingclass extends Component {
  render() {
    return (
        <BrowserRouter>

       <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:id" component={MovieData}/>

       </Switch>
        </BrowserRouter>
        );
  }
}

export default Routingclass;
