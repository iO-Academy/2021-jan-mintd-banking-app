import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import App from './App'
import Registration from "./Components/Registration/Registration";
import CreatePassCode from "./Components/CreatePassCode/CreatePassCode";
import NotFound from "./Components/NotFound/NotFound";

class Routing extends React.Component {
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Switch>
                        <Route exact path="/" component={ App } />
                        <Route path="/registration" component={ Registration } />
                        <Route path="/create-pass-code" component={ CreatePassCode } />
                        {/*<Route path="/users/:id" component={ Users } />*/}
                        <Route component={ NotFound } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routing