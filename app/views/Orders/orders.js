import React from 'react';
import { Switch, Route} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

import SchoolListLanding from "../../components/Orders/SchoolListLanding";
import SchoolLanding from "../../components/Orders/SchoolLanding";

const Bluebird = require('bluebird');
const storage = Bluebird.promisifyAll(require('electron-json-storage')); 

class Orders extends React.Component {
    state = {
        schoolsData: [],
        schoolName: "",
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        storage.getAsync("schools").then((data) => {
            this.setState({schoolsData: data["schools"]});
        });
    };

    render() {
        const { classes } = this.props;
        const SchoolListPage = () => {
            return (    
                <SchoolListLanding
                    onLoadData={this.loadData}
                    schoolsData={this.state.schoolsData}
                />
            );
        };
        const SchoolPage = (props, schoolsData) => {
            return (
                <SchoolLanding
                    schoolData={schoolsData[props.match.params.schoolIndex]}
                />
            );
        }
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Switch>
                            <Route exact path="/orders" render={SchoolListPage} />
                            <Route path="/orders/:schoolIndex" render={(props) => (SchoolPage(props, this.state.schoolsData))} />
                        </Switch>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}
export default (Orders);