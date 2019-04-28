import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import OrdersLanding from './OrdersLanding.js';
import SchoolLanding from './SchoolLanding.js';

import {
  loadSchools,
  loadSchool,
  createSchool,
  createOrder,
  deleteOrderFromCustomer
} from '../../actions/schoolAction.js';

class Orders extends React.Component {
  componentDidMount() {
    const { onLoadSchools } = this.props;
    onLoadSchools();
  }

  render() {
    const {
      match,
      schools,
      onCreateSchool,
      onCreateOrder,
      onDeleteOrder,
      onLoadSchools,
      onLoadSchool,
      currentSchool
    } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => (
              <OrdersLanding
                schools={schools}
                onLoadSchools={onLoadSchools}
                onCreateSchool={onCreateSchool}
              />
            )}
          />
          <Route
            path={`${match.path}/:schoolId`}
            render={props => (
              <SchoolLanding
                currentSchool={currentSchool}
                onLoadSchool={onLoadSchool}
                schoolId={props.match.params.schoolId}
                onCreateOrder={onCreateOrder}
                onDeleteOrder={onDeleteOrder}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

Orders.propTypes = {
  onCreateSchool: PropTypes.func.isRequired,
  onCreateOrder: PropTypes.func.isRequired,
  onDeleteOrder: PropTypes.func.isRequired,
  onLoadSchools: PropTypes.func.isRequired,
  onLoadSchool: PropTypes.func.isRequired,
  schools: PropTypes.arrayOf(Object).isRequired,
  currentSchool: PropTypes.arrayOf(Object).isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  schools: state.schoolReducer.schools,
  currentSchool: state.schoolReducer.currentSchool
});

const mapDispatchToProps = dispatch => ({
  onLoadSchools: () => dispatch(loadSchools()),
  onCreateSchool: name => dispatch(createSchool(name)),
  onCreateOrder: (id, order) => dispatch(createOrder(id, order)),
  onDeleteOrder: (id, data) => dispatch(deleteOrderFromCustomer(id, data)),
  onLoadSchool: id => dispatch(loadSchool(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
