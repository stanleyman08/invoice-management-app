import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Button from '../../components/CustomButtons/Button.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';

import OrderForm from '../../components/Form/OrderForm.js';
import OrderList from '../../components/List/OrderList.js';

import { arrayOfOrders } from '../../utils/utils.js';

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

class SchoolLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openOrderForm: false
    };
  }

  componentDidMount() {
    const { onLoadSchool, schoolId } = this.props;
    onLoadSchool(schoolId);
  }

  handleClickOpen = () => {
    this.setState({ openOrderForm: true });
  };

  handleClose = () => {
    this.setState({ openOrderForm: false });
  };

  render() {
    const {
      classes,
      currentSchool,
      onCreateOrder,
      schoolId,
      onDeleteOrder
    } = this.props;
    const { openOrderForm } = this.state;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{currentSchool[0].name}</h4>
        </CardHeader>
        <CardBody>
          <OrderList
            schoolId={schoolId}
            orders={arrayOfOrders(currentSchool[0].customers)}
            deleteOrder={onDeleteOrder}
          />
        </CardBody>
        <CardFooter>
          <Button color="primary" onClick={this.handleClickOpen}>
            Add
          </Button>
          <OrderForm
            openOrderForm={openOrderForm}
            onHandleClose={this.handleClose}
            createOrder={onCreateOrder}
            schoolId={schoolId}
          />
        </CardFooter>
      </Card>
    );
  }
}

SchoolLanding.propTypes = {
  classes: PropTypes.object.isRequired,
  schoolId: PropTypes.string.isRequired,
  onLoadSchool: PropTypes.func.isRequired,
  currentSchool: PropTypes.arrayOf(Object).isRequired,
  onCreateOrder: PropTypes.func.isRequired,
  onDeleteOrder: PropTypes.func.isRequired
};

export default withStyles(styles)(SchoolLanding);
