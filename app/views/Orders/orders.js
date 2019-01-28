import React from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

import SchoolListLanding from "../../components/Orders/SchoolListLanding";

const Bluebird = require('bluebird');
const storage = Bluebird.promisifyAll(require('electron-json-storage')); 

class Orders extends React.Component {

    state = {
        schoolsData: [],
        contentPage: "",
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        storage.getAsync("schools").then((data) => {
            this.setState({schoolsData: data["schools"]});
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <SchoolListLanding 
                            onLoadData={this.loadData}
                            schoolsData={this.state.schoolsData}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}
export default (Orders);