import { LOAD_SUMMARY_SUCCESS } from './actionType.js';

import Customer from '../nedb/Customer.js';

const { connect } = require('camo');

const { remote } = require('electron');

const { app } = remote;

// Tells nedb that it is using persistent storage.
// The local file is located in app.getPath('userData')}/data
const URI = `nedb:///${
  process.env.NODE_ENV === 'dev' ? '.' : app.getPath('userData')
}/data`;

export function loadSummarySuccess(summary) {
  return {
    type: LOAD_SUMMARY_SUCCESS,
    payload: summary
  };
}

export function loadSummary() {
  return dispatch => {
    connect(URI)
      .then(() => Customer.find({}))
      .then(allCustomer => {
        const day1Counts = {
          a: 0,
          b: 0,
          ma: 0,
          mb: 0,
          la: 0,
          lb: 0,
          juice: 0,
          fruits: 0
        };
        const day2Counts = {
          a: 0,
          b: 0,
          ma: 0,
          mb: 0,
          la: 0,
          lb: 0,
          juice: 0,
          fruits: 0
        };
        const day3Counts = {
          a: 0,
          b: 0,
          ma: 0,
          mb: 0,
          la: 0,
          lb: 0,
          juice: 0,
          fruits: 0
        };
        const day4Counts = {
          a: 0,
          b: 0,
          ma: 0,
          mb: 0,
          la: 0,
          lb: 0,
          juice: 0,
          fruits: 0
        };
        const day5Counts = {
          a: 0,
          b: 0,
          ma: 0,
          mb: 0,
          la: 0,
          lb: 0,
          juice: 0,
          fruits: 0
        };
        allCustomer.forEach(customer => {
          customer.orders.forEach(order => {
            day1Counts[order.day1] += 1;
            day2Counts[order.day2] += 1;
            day3Counts[order.day3] += 1;
            day4Counts[order.day4] += 1;
            day5Counts[order.day5] += 1;
          });
        });
        return [day1Counts, day2Counts, day3Counts, day4Counts, day5Counts];
      })
      .then(arrayCount => {
        dispatch(loadSummarySuccess(arrayCount));
      });
  };
}
