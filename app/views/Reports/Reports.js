import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';

import ReportList from '../../components/List/ReportList.js';

import { loadReports } from '../../actions/reportAction.js';

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

class Reports extends React.Component {
  componentDidMount() {
    const { onLoadReports } = this.props;
    onLoadReports();
  }

  render() {
    const { classes, reports } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Reports</h4>
        </CardHeader>
        <CardBody>
          <ReportList reports={reports} />
        </CardBody>
        <CardFooter />
      </Card>
    );
  }
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired,
  reports: PropTypes.object.isRequired,
  onLoadReports: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  reports: state.reportReducer.reports
});

const mapDispatchToProps = dispatch => ({
  onLoadReports: () => dispatch(loadReports())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Reports));
