import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// core components
import Button from '../CustomButtons/Button.js';

import * as SchoolAPI from '../../utils/SchoolAPI.js';

function orderChoices(size, choice) {
  if (choice === '') {
    return '';
  }
  if (size === 'regular') {
    return choice;
  }
  if (size === 'medium') {
    return `m${choice}`;
  }
  return `l${choice}`;
}
class OrderFormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      div: '',
      size: '',
      day1Order: '',
      day2Order: '',
      day3Order: '',
      day4Order: '',
      day5Order: ''
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleAdd = () => {
    const { schoolData, onHandleClose, onLoadData } = this.props;
    const {
      name,
      div,
      size,
      day1Order,
      day2Order,
      day3Order,
      day4Order,
      day5Order
    } = this.state;
    const day1Choices = orderChoices(size, day1Order);
    const day2Choices = orderChoices(size, day2Order);
    const day3Choices = orderChoices(size, day3Order);
    const day4Choices = orderChoices(size, day4Order);
    const day5Choices = orderChoices(size, day5Order);
    SchoolAPI.createOrder(schoolData.name, {
      name,
      div,
      size,
      day1Choices,
      day2Choices,
      day3Choices,
      day4Choices,
      day5Choices
    }).then(() => {
      onHandleClose();
      this.setState({ name: '', div: '', size: '' });
      onLoadData();
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.openOrderFormDialog}
        onClose={this.props.onHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>Input Order forms</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            label="Name"
            type="text"
            fullWidth
          >
            {' '}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="div"
            value={this.state.div}
            onChange={this.handleChange('div')}
            label="Div/Room"
            type="text"
            fullWidth
          >
            {' '}
          </TextField>
          Size:
          <Select value={this.state.size} onChange={this.handleChange('size')}>
            <MenuItem value="regular">Regular</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
          Day1:
          <Select
            value={this.state.day1Order}
            onChange={this.handleChange('day1Order')}
          >
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day2:
          <Select
            value={this.state.day2Order}
            onChange={this.handleChange('day2Order')}
          >
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day3:
          <Select
            value={this.state.day3Order}
            onChange={this.handleChange('day3Order')}
          >
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day4:
          <Select
            value={this.state.day4Order}
            onChange={this.handleChange('day4Order')}
          >
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day5:
          <Select
            value={this.state.day5Order}
            onChange={this.handleChange('day5Order')}
          >
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onHandleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

OrderFormDialog.propTypes = {
  onHandleClose: PropTypes.func,
  onLoadData: PropTypes.func,
  schoolData: PropTypes.shape({
    name: PropTypes.string,
    orders: PropTypes.array
  })
};

export default OrderFormDialog;
