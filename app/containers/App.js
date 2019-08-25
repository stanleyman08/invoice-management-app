// @flow
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import Sidebar from '../components/Sidebar/Sidebar.js';
import Appbar from '../components/Appbar/Appbar.js';

import appRoutes from '../routes/app.js';

import AppStyles from './AppStyles';


const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      console.log(prop);
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      }
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true
    }
  }

  getRoute() {
    const { location } = this.props;
    return location.pathname !== '/maps';
  }

  handleDrawerToggle = () => {
    this.setState({ navDrawerOpen: !this.state.navDrawerOpen });
    console.log("toggle drawer:" + this.state.navDrawerOpen);
  };

  render() {
      const { classes } = this.props;
      const { navDrawerOpen } = this.state;
      return (
          <div className={classes.root}>
              <Appbar
                  navDrawerOpen={navDrawerOpen}
                  handleDrawerToggle={this.handleDrawerToggle}
              />
              <Sidebar
                  appRoutes={appRoutes}
                  navDrawerOpen={navDrawerOpen}
                  handleDrawerToggle={this.handleDrawerToggle}
              />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <div>
                  {console.log(this.props.location)}
                  {switchRoutes}
                </div>
              </main>
          </div>
      );
  }
}

export default withStyles(AppStyles)(App);
