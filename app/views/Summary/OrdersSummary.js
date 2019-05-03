import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';

import SummaryList from '../../components/List/SummaryList.js';

import { loadSummary } from '../../actions/summaryAction.js';

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

class OrdersSummary extends React.Component {
  componentDidMount() {
    const { onLoadSummary } = this.props;
    onLoadSummary();
  }

  render() {
    const { classes, summary } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Reports</h4>
        </CardHeader>
        <CardBody>
          <SummaryList summary={summary} />
        </CardBody>
        <CardFooter />
      </Card>
    );
  }
}

OrdersSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  summary: PropTypes.arrayOf(Object).isRequired,
  onLoadSummary: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  summary: state.summaryReducer.summary
});

const mapDispatchToProps = dispatch => ({
  onLoadSummary: () => dispatch(loadSummary())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(OrdersSummary));
