
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from 'react'
import SignIn from "./Pages/SignIn";
import SignUp from './Pages/SignUp'
import Dashboard from "./Pages/Dashboard";

function Router1() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Dashboard" component ={Dashboard} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router1;