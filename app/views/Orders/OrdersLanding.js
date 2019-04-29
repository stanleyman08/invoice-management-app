import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Button from '../../components/CustomButtons/Button.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';

import SchoolForm from '../../components/Form/SchoolForm.js';
import EditSchoolForm from '../../components/Form/EditSchoolForm'; // todo
import SchoolList from '../../components/List/SchoolList.js';

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

class OrdersLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSchoolForm: false,
      openEditSchoolForm: false
    };
  }

  handleClickOpen = () => {
    this.setState({ openSchoolForm: true });
  };

  // todo
  handleEditClickOpen = () => {
    this.setState({ openEditSchoolForm: true });
  };

  handleClose = () => {
    this.setState({ openSchoolForm: false });
  };

  // todo
  handleEditClose = () => {
    this.setState({ openEditSchoolForm: false });
  };

  render() {
    const {
      classes,
      schools,
      onCreateSchool,
      onDeleteSchool,
      onLoadSchools
    } = this.props;
    const { openEditSchoolForm, openSchoolForm } = this.state;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}> Schools</h4>
        </CardHeader>
        <CardBody>
          <SchoolList
            schools={schools}
            deleteSchool={onDeleteSchool}
            onHandleEditClickOpen={this.handleEditClickOpen}
            {...this.props}
          />
          <EditSchoolForm
            openEditSchoolForm={openEditSchoolForm}
            onHandleEditClose={this.handleEditClose}
          />
        </CardBody>
        <CardFooter>
          <Button color="primary" onClick={this.handleClickOpen}>
            Add
          </Button>
          <SchoolForm
            openSchoolForm={openSchoolForm}
            createSchool={onCreateSchool}
            loadSchools={onLoadSchools}
            onHandleClose={this.handleClose}
          />
        </CardFooter>
      </Card>
    );
  }
}

OrdersLanding.propTypes = {
  classes: PropTypes.object.isRequired,
  onCreateSchool: PropTypes.func.isRequired,
  onDeleteSchool: PropTypes.func.isRequired,
  onLoadSchools: PropTypes.func.isRequired,
  schools: PropTypes.arrayOf(Object).isRequired
};

export default withStyles(styles)(OrdersLanding);
