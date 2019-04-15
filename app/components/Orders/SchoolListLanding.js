import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import Button from '../CustomButtons/Button.js';
import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';
import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';

import SchoolList from './SchoolList.js';
import SchoolFormDialog from './SchoolFormDialog.js';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  }
};

class SchoolListLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFormDialog: false
    };
  }

  handleClickOpen = () => {
    this.setState({ openFormDialog: true });
  };

  handleClose = () => {
    this.setState({ openFormDialog: false });
  };

  render() {
    const { classes, onLoadData, schoolsData } = this.props;
    const { openFormDialog } = this.state;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}> Schools</h4>
        </CardHeader>
        <CardBody>
          <SchoolList onLoadData={onLoadData} schoolsData={schoolsData} />
        </CardBody>
        <CardFooter>
          <Button color="primary" onClick={this.handleClickOpen}>
            Add
          </Button>
          <SchoolFormDialog
            onLoadData={onLoadData}
            openFormDialog={openFormDialog}
            onHandleClose={this.handleClose}
          />
        </CardFooter>
      </Card>
    );
  }
}

SchoolListLanding.propTypes = {
  classes: PropTypes.object.isRequired,
  onLoadData: PropTypes.func,
  schoolsData: PropTypes.arrayOf(PropTypes.object)
};
export default withStyles(styles)(SchoolListLanding);
