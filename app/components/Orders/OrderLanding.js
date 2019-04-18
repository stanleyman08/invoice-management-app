import React from 'react';
import Link from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';
import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';
import Button from '../CustomButtons/Button.js';

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

class OrderLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>tbd</h4>
        </CardHeader>
        <CardBody>tbd</CardBody>
        <CardFooter />
      </Card>
    );
  }
}

export default withStyles(styles)(OrderLanding);
