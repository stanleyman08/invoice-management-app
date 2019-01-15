// @flow
import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import type { Store } from '../reducers/types';
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from '../routes/dashboard.js';

import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Sidebar from "../components/Sidebar/Sidebar.js";

import image from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";

import dashboardStyle from "../assets/jss/material-dashboard-react/layouts/dashboardStyle.js";

// type Props = {
//   store: Store,
//   history: {}
// };
const switchRoutes = (
  <Switch>
    {Routes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);
class Dashboard extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={Routes}
          logoText={"Creative Tim"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
