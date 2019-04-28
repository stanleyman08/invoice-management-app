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
import Checkbox from '@material-ui/core/Checkbox';

// core components
import Button from '../CustomButtons/Button.js';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      orderName: '',
      div: '',
      size: '',
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5: '',
      juice: true,
      fruits: true
    };
  }

  clearInput = () => {
    this.setState({
      customerName: '',
      orderName: '',
      div: '',
      size: '',
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5: '',
      juice: true,
      fruits: true
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleAdd = () => {
    const { onHandleClose, createOrder, schoolId } = this.props;
    const {
      customerName,
      orderName,
      div,
      size,
      day1,
      day2,
      day3,
      day4,
      day5,
      juice,
      fruits
    } = this.state;
    createOrder(schoolId, {
      customerName,
      orderName,
      div,
      size,
      day1,
      day2,
      day3,
      day4,
      day5,
      juice,
      fruits
    });
    onHandleClose();
    this.clearInput();
  };
  //

  handleCancel = () => {
    const { onHandleClose } = this.props;
    onHandleClose();
  };

  render() {
    return (
      <Dialog
        open={this.props.openOrderForm}
        onClose={this.props.onHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>Input Order forms</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="customerName"
            value={this.state.customerName}
            onChange={this.handleChange('customerName')}
            label="Customer Name"
            type="text"
            fullWidth
          >
            {' '}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="orderName"
            value={this.state.orderName}
            onChange={this.handleChange('orderName')}
            label="Order Name"
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="regular">Regular</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
          Day1:
          <Select value={this.state.day1} onChange={this.handleChange('day1')}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day2:
          <Select value={this.state.day2} onChange={this.handleChange('day2')}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day3:
          <Select value={this.state.day3} onChange={this.handleChange('day3')}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day4:
          <Select value={this.state.day4} onChange={this.handleChange('day4')}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          Day5:
          <Select value={this.state.day5} onChange={this.handleChange('day5')}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
          </Select>
          <Checkbox
            checked={this.state.juice}
            onChange={this.handleCheckbox('juice')}
            value="juice"
          />
          juice
          <Checkbox
            checked={this.state.fruits}
            onChange={this.handleCheckbox('fruits')}
            value="fruits"
          />
          fruits
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

OrderForm.propTypes = {
  createOrder: PropTypes.func.isRequired,
  onHandleClose: PropTypes.func.isRequired,
  openOrderForm: PropTypes.bool.isRequired,
  schoolId: PropTypes.string.isRequired
};

export default OrderForm;
