// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import type { Store } from '../reducers/types';
import indexRoutes from '../routes/index.js';

type Props = {
  store: Store,
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            {indexRoutes.map((prop, key) => (
              <Route
                history={history}
                path={prop.path}
                component={prop.component}
                key={key}
              />
            ))}
          </Switch>
        </Router>
      </Provider>
    );
  }
}
