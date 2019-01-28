import React from "react";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Bluebird = require('bluebird');
const storage = Bluebird.promisifyAll(require('electron-json-storage')); 

class SchoolList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (itemIndex) => {
        storage.getAsync("schools").then((data) => {
            if (Object.keys(data).length != 0) {
                data["schools"].splice(itemIndex, 1);
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
        const listSchools = this.props.schoolsData.map((school, i) =>
            <div key={i}>
                <ListItem button>
                    <ListItemText primary={school.name}/>
                    <ListItemSecondaryAction onClick={() => this.handleDelete(i)}>
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
    }
}

export default SchoolList;