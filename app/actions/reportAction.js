import { LOAD_REPORTS_SUCCESS } from './actionType.js';

import Customer from '../nedb/Customer.js';

const connect = require('camo').connect;

const remote = require('electron').remote;

const app = remote.app;

// Tells nedb that it is using persistent storage.
// The local file is located in app.getPath('userData')}/data
const URI = `nedb:///${
  process.env.NODE_ENV === 'dev' ? '.' : app.getPath('userData')
}/data`;

export function loadReportsSuccess(reports) {
  return {
    type: LOAD_REPORTS_SUCCESS,
    payload: reports
  };
}

export function loadReports() {
  return dispatch => {
    connect(URI)
      .then(() => Customer.find({}))
      .then(allCustomer => {
        const counts = { a: 0, b: 0, ma: 0, mb: 0, la: 0, lb: 0 };
        allCustomer.forEach(customer => {
          customer.orders.forEach(order => {
            counts[order.day1] += 1;
            counts[order.day2] += 1;
            counts[order.day3] += 1;
            counts[order.day4] += 1;
            counts[order.day5] += 1;
          });
        });
        return counts;
      })
      .then(totalCount => {
        dispatch(loadReportsSuccess(totalCount));
      });
  };
}
