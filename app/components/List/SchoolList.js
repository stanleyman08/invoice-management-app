// SchoolList Component:
// State:

// School Array
// Actions:

// Users can click a School Item
// Users can delete a School Item
// Users can edit a school
//

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// @material-ui/core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const SchoolList = ({ schools }) => (
  <List>
    {schools.map(school => (
      <div key={school._id}>
        <ListItem button component={Link} to={`/app/orders/${school._id}`}>
          <ListItemText primary={school.name} />
        </ListItem>
      </div>
    ))}
  </List>
);

SchoolList.propTypes = {
  schools: PropTypes.arrayOf(Object).isRequired
};

export default SchoolList;
