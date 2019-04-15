import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { Link } from 'react-router-dom';

import { deleteSchool } from '../../utils/SchoolAPI.js';

const styles = {
  removeUnderline: {
    textDecoration: 'none'
  }
};

class SchoolList extends React.Component {
  handleDelete = id => {
    const { onLoadData } = this.props;
    deleteSchool(id).then(() => {
      onLoadData();
    });
  };

  render() {
    const { schoolsData } = this.props;
    const listSchools = schoolsData.map((school, i) => (
      <div key={i}>
        <ListItem button component={Link} to={`/orders/${i}`}>
          <ListItemText primary={school.name} />
          <ListItemSecondaryAction
            onClick={() => this.handleDelete(school._id)}
          >
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    ));
    return <List>{listSchools}</List>;
  }
}

SchoolList.propTypes = {
  onLoadData: PropTypes.func,
  schoolsData: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(SchoolList);
