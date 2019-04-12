import React from "react";
// @material-ui/core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
// core components
import Button from "../CustomButtons/Button.js";

import * as SchoolAPI from "../../utils/SchoolAPI.js"

class SchoolFormDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: "",
        errorText: ""
    };

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    };

    handleValidation = () => {
        let nameIsValid = true;
        if (this.state.name === "") {
            nameIsValid = false;
            this.setState({ errorText: "School/Organization is empty"})
        }
        return nameIsValid;
    };

    handleAdd = (e) => {
        if(this.handleValidation()) {
            SchoolAPI.createSchool(this.state.name);
            this.props.onHandleClose();
            this.setState({ name: "", errorText: ""});
            this.props.onLoadData();
        }
    };

    handleCancel = (e) => {
        this.props.onHandleClose();
        this.setState({ errorText: ""});
    }

    render() {
        return (
            <Dialog open={this.props.openFormDialog} onClose={this.props.onHandleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Input forms for schools/orgnaizations                        
                    </DialogContentText>
                <TextField 
                    autoFocus 
                    margin="dense" 
                    error={this.state.errorText.length === 0 ? false : true}
                    helperText={this.state.errorText} 
                    id="schoolName" 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    label="School/Organization" 
                    type="text" 
                    fullWidth 
                    required> 
                </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel}>
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

export default SchoolFormDialog;