import React from 'react';
// @material-ui/core components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import SchoolFormDialog from "../../components/Dialogs/SchoolFormDialog.js";
import SchoolList from "../../components/List/SchoolList.js";

const Bluebird = require('bluebird');
const storage = Bluebird.promisifyAll(require('electron-json-storage')); 

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

class Orders extends React.Component {

    state = {
        openFormDialog: false,
        schoolsData: [],
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        storage.getAsync("schools").then((data) => {
            this.setState({schoolsData: data["schools"]});
        });
    };

    handleClickOpen = () => {
        this.setState({ openFormDialog: true });
    };

    handleClose = () => {
        this.setState({ openFormDialog: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}> Schools</h4>
                            </CardHeader>
                            <CardBody>
                                <SchoolList onLoadData={this.loadData} schoolsData={this.state.schoolsData} />
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" onClick={this.handleClickOpen}> 
                                    Add 
                                </Button>
                                <SchoolFormDialog onLoadData={this.loadData} openFormDialog={this.state.openFormDialog} onHandleClose={this.handleClose}/>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}
export default withStyles(styles)(Orders);