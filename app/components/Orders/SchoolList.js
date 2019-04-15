import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { Link } from "react-router-dom";

import { deleteSchool } from "../../utils/SchoolAPI.js"

const styles = {
    removeUnderline: {
        textDecoration: "none"
    }
}

class SchoolList extends React.Component {
    constructor(props) {
        super(props);
    };

    handleDelete = (id) => {
        deleteSchool(id).then(() => {
        	this.props.onLoadData();
        });
    };
    render() {
        const { classes } = this.props;
        const listSchools = this.props.schoolsData.map((school, i) =>
            <div key={i}>
                <ListItem button component={Link} to={`/orders/${i}`}>
                    <ListItemText primary={school.name}/>
                    <ListItemSecondaryAction onClick={() => this.handleDelete(school["_id"])}>
                        <IconButton aria-label="Delete" >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </div>
        );
        return (
            <List>
                {listSchools}
            </List>
        );
    };
}

export default withStyles(styles)(SchoolList);