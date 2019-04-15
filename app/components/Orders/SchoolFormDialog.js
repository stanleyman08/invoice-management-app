import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
// core components
import Button from '../CustomButtons/Button.js';

import * as SchoolAPI from '../../utils/SchoolAPI.js';

class SchoolFormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      errorText: ''
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleValidation = () => {
    const { name } = this.state;
    let nameIsValid = true;
    if (name === '') {
      nameIsValid = false;
      this.setState({ errorText: 'School/Organization is empty' });
    }
    return nameIsValid;
  };

  handleAdd = () => {
    const { onHandleClose, onLoadData } = this.props;
    const { name } = this.state;
    if (this.handleValidation()) {
      SchoolAPI.createSchool(name);
      onHandleClose();
      this.setState({ name: '', errorText: '' });
      onLoadData();
    }
  };

  handleCancel = () => {
    const { onHandleClose } = this.props;
    onHandleClose();
    this.setState({ errorText: '' });
  };

  render() {
    const { openFormDialog, onHandleClose } = this.props;
    const { name, errorText } = this.state;
    return (
      <Dialog
        open={openFormDialog}
        onClose={onHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Input forms for schools/orgnaizations
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            error={errorText.length !== 0}
            helperText={errorText}
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

SchoolFormDialog.propTypes = {
  onHandleClose: PropTypes.func,
  onLoadData: PropTypes.func,
  openFormDialog: PropTypes.bool
};

export default SchoolFormDialog;
