import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "../routes/index.js";

const hist = createBrowserHistory();

class Root extends React.Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })};
                </Switch>
            </Router>
        );
    }
}

export default Root