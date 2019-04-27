// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import type { Store } from '../reducers/types.js';
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
        <ConnectedRouter history={history}>
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
        </ConnectedRouter>
      </Provider>
    );
  }
}
