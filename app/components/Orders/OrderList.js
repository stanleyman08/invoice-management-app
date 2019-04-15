import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "../CustomButtons/Button.js";

import { Link } from "react-router-dom";

const Bluebird = require('bluebird');
const storage = Bluebird.promisifyAll(require('electron-json-storage')); 

class OrderList extends React.Component {
    constructor(props) {
        super(props);
    };

    handleDelete = (itemIndex) => {
        storage.getAsync("schools").then((data) => {
            if (Object.keys(data).length != 0) {
                data["schools"][this.props.schoolIndex]["orders"].splice(itemIndex, 1)
                storage.setAsync("schools", data).then(() => {
                    this.props.onLoadData();
                });
            } else {
                error("No data to delete")
            }
        });
    };
    render() {
        const { classes } = this.props;
        const currentPath = this.props.location.pathname;
        return (
            <div>
                <List>
                    {listOrders}
                </List>
            </div>
        );
    };
}

export default OrderList;