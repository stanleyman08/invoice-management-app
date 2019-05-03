import {
  LOAD_SCHOOLS_SUCCESS,
  CREATE_SCHOOL_SUCCESS,
  LOAD_SCHOOL_SUCCESS,
  CREATE_ORDER_SUCCESS,
  UPDATE_SCHOOL_SUCCESS,
  DELETE_ORDER_SUCCESS,
  DELETE_SCHOOL_SUCCESS
} from './actionType.js';

import School from '../nedb/School.js';
import Customer from '../nedb/Customer.js';

const connect = require('camo').connect;

const remote = require('electron').remote;

const app = remote.app;

// Tells nedb that it is using persistent storage.
// The local file is located in app.getPath('userData')}/data
const URI = `nedb:///${
  process.env.NODE_ENV === 'dev' ? '.' : app.getPath('userData')
}/data`;

export function loadSchoolsSuccess(schools) {
  return {
    type: LOAD_SCHOOLS_SUCCESS,
    payload: schools
  };
}

export function loadSchoolSuccess(school) {
  return {
    type: LOAD_SCHOOL_SUCCESS,
    payload: school
  };
}

export function createSchoolSuccess(school) {
  return {
    type: CREATE_SCHOOL_SUCCESS,
    payload: school
  };
}

export function createOrderSuccess(order) {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: order
  };
}

export function updateSchoolSuccess(school) {
  return {
    type: UPDATE_SCHOOL_SUCCESS,
    payload: school
  };
}

export function deleteOrderSuccess(customer) {
  return {
    type: DELETE_ORDER_SUCCESS,
    payload: customer
  };
}

export function deleteSchoolSuccess(numDeleted) {
  return {
    type: DELETE_SCHOOL_SUCCESS,
    payload: numDeleted
  };
}

export function loadSchools() {
  return dispatch => {
    connect(URI)
      .then(() => School.getData())
      .then(schools => {
        dispatch(loadSchoolsSuccess(schools));
      });
  };
}

export function createSchool(name) {
  return dispatch => {
    connect(URI)
      .then(() => {
        const school = School.create({
          name
        });
        return school.save();
      })
      .then(school => {
        dispatch(createSchoolSuccess(school));
        dispatch(loadSchools());
      });
  };
}

export function deleteSchool(id) {
  return dispatch => {
    connect(URI)
      .then(() => School.findOneAndDelete({ _id: id }))
      .then(numDeleted => {
        dispatch(deleteSchoolSuccess(numDeleted));
        dispatch(loadSchools());
      });
  };
}

export function loadSchool(id) {
  return dispatch => {
    connect(URI)
      .then(() => School.getSchool(id))
      .then(school => {
        dispatch(loadSchoolSuccess(school));
      });
  };
}

export function updateSchoolCustomer(id, customer) {
  return dispatch => {
    connect(URI)
      .then(() => School.find({ _id: id }))
      .then(school => {
        school[0].customers.push(customer);
        return school[0].save();
      })
      .then(newSchool => {
        dispatch(updateSchoolSuccess(newSchool));
        dispatch(loadSchools());
      });
  };
}

export function createOrder(id, order) {
  return dispatch => {
    connect(URI)
      .then(() => {
        const customer = Customer.create({
          customerName: order.customerName
        });
        console.log(order);
        customer.ordersData = order;
        return customer.save();
      })
      .then(customer => {
        dispatch(createOrderSuccess(customer));
        dispatch(updateSchoolCustomer(id, customer));
      });
  };
}

export function deleteOrderFromCustomer(id, data) {
  return dispatch => {
    connect(URI)
      .then(() =>
        Customer.find({
          'orders.orderName': data.orderName,
          'orders.div': data.div,
          'orders.size': data.size,
          'orders.day1': data.day1,
          'orders.day2': data.day2,
          'orders.day3': data.day3,
          'orders.day4': data.day4,
          'orders.day5': data.day5,
          'orders.juiceFruits': data.juiceFruits
        })
      )
      .then(customer => {
        // This will only delete the first order in customer
        // TODO: Delete the correct order from customer
        // becacause a customer can have more than 1 order
        customer[0].orders.splice(0, 1);
        return customer[0].save();
      })
      .then(newCustomer => {
        dispatch(deleteOrderSuccess(newCustomer));
        dispatch(loadSchool(id));
      });
  };
}
