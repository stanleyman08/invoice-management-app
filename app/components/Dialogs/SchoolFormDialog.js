import React from "react";
// @material-ui/core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
// core components
import Button from "../../components/CustomButtons/Button.js";
import Data from "../../utils/data.js";

class SchoolFormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.schoolsData = new Data("schools");
    }

    state = {
        name: "",
    };

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    };

    handleAdd = (e) => {
        this.schoolsData.add("schools", this.state.name);
        this.props.onHandleClose();
    };

    render() {
        return (
            <Dialog open={this.props.openFormDialog} onClose={this.props.onHandleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Input forms for schools/orgnaizations                        
                    </DialogContentText>
                <TextField autoFocus margin="dense" id="schoolName" value={this.state.name} onChange={this.handleChange} label="School/Organization" type="text" fullWidth> </TextField>
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

export default SchoolFormDialog;