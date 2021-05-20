
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from 'react'
import SignIn from "./Pages/SignIn";
import SignUp from './Pages/SignUp'
import Dashboard from "./Pages/Dashboard";
import Product from './Components/Product'
import ProductList from './Components/ProductList'

function Router1() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Dashboard" component ={Dashboard} />
                    <Route path= "/Product" component = {Product} />
                    <Route path = "/ProductList" component = {ProductList} />
                 </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router1;