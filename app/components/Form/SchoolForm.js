import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import Button from '../CustomButtons/Button.js';

class SchoolForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  clearInput = () => {
    this.setState({ name: '' });
  };

  handleCancel = () => {
    const { onHandleClose } = this.props;
    onHandleClose();
  };

  handleAdd = () => {
    const { name } = this.state;
    const { createSchool, onHandleClose } = this.props;
    createSchool(name);
    onHandleClose();
    this.clearInput();
  };

  render() {
    const { openSchoolForm, onHandleClose } = this.props;
    const { name } = this.state;
    return (
      <Dialog
        open={openSchoolForm}
        onClose={onHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="schoolName"
            value={name}
            onChange={this.handleChange}
            label="School/Organization"
            type="text"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button onClick={this.handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SchoolForm.propTypes = {
  onHandleClose: PropTypes.func.isRequired,
  createSchool: PropTypes.func.isRequired,
  openSchoolForm: PropTypes.bool.isRequired
};

export default SchoolForm;
