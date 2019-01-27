import React from "react";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class SchoolList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listSchools = this.props.schoolsData.map((school, i) =>
            <div key={i}>
                <ListItem button>
                    <ListItemText primary={school.name}/>
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

export default SchoolList