import React from 'react';
import { Switch, Route} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";

import SchoolListLanding from "../../components/Orders/SchoolListLanding";
import SchoolLanding from "../../components/Orders/SchoolLanding";
import OrderLanding from "../../components/Orders/OrderLanding";

import * as SchoolAPI from "../../utils/SchoolAPI.js"

class Orders extends React.Component {
    state = {
        schoolsData: [],
        schoolName: "",
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        SchoolAPI.getAllSchools().then((data) => {
        	this.setState(({schoolsData: data}));
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Switch>
                            <Route exact path="/orders" render={(props) => <SchoolListLanding onLoadData={this.loadData} schoolsData={this.state.schoolsData} {...props} />} />
                            <Route path="/orders/:schoolIndex" render={(props) => <SchoolLanding onLoadData={this.loadData} schoolData={this.state.schoolsData[props.match.params.schoolIndex]} schoolIndex={props.match.params.schoolIndex} {...props} />} />
                        </Switch>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}
export default (Orders);