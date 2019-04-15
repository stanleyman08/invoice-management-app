import React from "react";
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
import Button from "../CustomButtons/Button.js";

import * as SchoolAPI from "../../utils/SchoolAPI.js"

class OrderFormDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: "",
        div: "",
        orderSize: "",
        day1Order: "",
        day2Order: "",
        day3Order: "",
        day4Order: "",
        day5Order: "",
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleAdd = (e) => {
        SchoolAPI.createOrder(this.props.schoolData.name, {name: this.state.name, 
        													div: this.state.div, 
        													orderSize: this.state.orderSize, 
        													day1Order: this.state.day1Order,
        													day2Order: this.state.day2Order,
        													day3Order: this.state.day3Order,
        													day4Order: this.state.day4Order,
        													day5Order: this.state.day5Order,}).then(() => {
        	this.props.onHandleClose();
        	this.setState({ name: "", div: "", orderSize: ""});
        	this.props.onLoadData();
        });
    };

    render() {
        return (
            <Dialog open={this.props.openOrderFormDialog} onClose={this.props.onHandleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Input Order forms                       
                    </DialogContentText>
                <TextField autoFocus margin="dense" id="name" value={this.state.name} onChange={this.handleChange('name')} label="Name" type="text" fullWidth> </TextField>
                <TextField autoFocus margin="dense" id="div" value={this.state.div} onChange={this.handleChange('div')} label="Div/Room" type="text" fullWidth> </TextField>
                Size:
                <Select
                	value={this.state.orderSize} 
                	onChange={this.handleChange('orderSize')}
               	>
               		<MenuItem value="small">Small</MenuItem>
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

export default OrderFormDialog;