import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import App from './App'
import Registration from "./Components/Registration/Registration";
import CreatePassCode from "./Components/CreatePassCode/CreatePassCode";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import MainAccounts from "./Components/MainAccounts/MainAccounts";
import PayMoneyIn from "./Components/PayMoneyIn/PayMoneyIn";
import Menu from "./Components/Menu/Menu";
import CloseAccount from "./Components/CloseAccount/CloseAccount";
import AddNewAccount from "./Components/AddNewAccount/AddNewAccount";

class Routing extends React.Component {
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Switch>
                        <Route exact path="/" component={ App } />
                        <Route path="/registration" component={ Registration } />
                        <Route path="/create-pass-code" component={ CreatePassCode } />
                        <Route path="/login" component={ Login } />
                        <Route path="/main-accounts" component={ MainAccounts } />
                        <Route path="/pay-money-in" component={ PayMoneyIn } />
                        {/*<Route path="/users/:id" component={ Users } />*/}
                        <Route component={ NotFound } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routing