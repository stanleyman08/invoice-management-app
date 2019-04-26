// @flow
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import Sidebar from '../components/Sidebar/Sidebar.js';

import appRoutes from '../routes/app.js';

import image from '../assets/img/sidebar-2.jpg';
import logo from '../assets/img/reactlogo.png';
import appStyles from '../assets/jss/material-dashboard-react/layouts/appStyle.js';

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      }
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: false
  };

  getRoute() {
    const { location } = this.props;
    return location.pathname !== '/maps';
  }

  handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { mobileOpen } = this.state;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={appRoutes}
          logoText="APP NAME"
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
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

export default withStyles(appStyles)(App);
