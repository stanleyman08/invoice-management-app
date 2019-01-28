import React from "react";

// @material-ui/core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";

import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";

import SchoolList from "./SchoolList.js"
import SchoolFormDialog from "./SchoolFormDialog.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class SchoolListLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        openFormDialog: false,
    }

    handleClickOpen = () => {
        this.setState({ openFormDialog: true });
    };

    handleClose = () => {
        this.setState({ openFormDialog: false });
    };

    render() {
        const { classes } = this.props
        return (
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}> Schools</h4>
                </CardHeader>
                <CardBody>
                    <SchoolList onLoadData={this.props.onLoadData} schoolsData={this.props.schoolsData} />
                </CardBody>
                <CardFooter>
                    <Button color="primary" onClick={this.handleClickOpen}> 
                        Add 
                    </Button>
                    <SchoolFormDialog onLoadData={this.props.onLoadData} openFormDialog={this.state.openFormDialog} onHandleClose={this.handleClose}/>
                </CardFooter>
            </Card>
        );
    };
}

export default withStyles(styles)(SchoolListLanding);