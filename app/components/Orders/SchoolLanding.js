import React from "react";
import { Switch, Link, Route} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import Button from "../CustomButtons/Button.js";

import OrderList from "./OrderList.js"
import OrderFormDialog from "./OrderFormDialog.js";
import OrderLanding from "./OrderLanding.js";
import Table from "../Table/table.js"

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

const item = [["asdf","dfasd","asdfsa","asdfsa","asdfas","asdfa","asdf","asdfa"]];
class SchoolLanding extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        openOrderFormDialog: false,
        dataTable: []
    }

    goBack = () => {
        this.props.history.goBack();
    };

    handleClickOpen = () => {
        this.setState({ openOrderFormDialog: true });
    };

    handleClose = () => {
        this.setState({ openOrderFormDialog: false });
    };

    componentDidMount() {
    	this.updateDataTable();
    };

    componentDidUpdate(prevProps) {
    	if (this.props.schoolData.orders !== prevProps.schoolData.orders) {
    		this.updateDataTable();
    	}
    }

    updateDataTable() {
    	var dataArray = new Array;
    	this.props.schoolData.orders.forEach(function(order) {
    		dataArray.push(Object.values(order));
    	});
    	this.setState( {dataTable: dataArray });
    };

    render() {
        const {classes} = this.props;
        const SchoolLanding = () => 
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>
                        {this.props.schoolData.name}
                    </h4>
                </CardHeader>
                <CardBody>
                	<Table
                		tableHeaderColor="primary"
                		tableHead={["Name","Div","Order Size", "Day1 Order", "Day2 Order", "Day3 Order", "Day4 Order", "Day5 order"]}
                		tableData={this.state.dataTable}                	
                	/>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.goBack}>
                        back
                    </Button>
                    <Button onClick={this.test}>
                        navigate to
                    </Button>
                    <Button onClick={this.handleClickOpen}>
                        Add
                    </Button>
                     <OrderFormDialog onLoadData={this.props.onLoadData} openOrderFormDialog={this.state.openOrderFormDialog} onHandleClose={this.handleClose} {...this.props}/>
                </CardFooter>
            </Card>
        return (
            <div>
                <Route path={`${this.props.match.path}/:orderId`} render={(props) => <OrderLanding schoolData={this.props.schoolData} {...props}/>} />
                <Route exact path={this.props.match.path} render={SchoolLanding} />
            </div>
        );
    }
}

export default withStyles(styles)(SchoolLanding);