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
import Order from '../nedb/Order.js';

import { juiceFruits, orderChoices } from '../utils/utils.js';

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

export function deleteOrderSuccess(numDeleted) {
  return {
    type: DELETE_ORDER_SUCCESS,
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

export function updateSchoolOrder(id, order) {
  return dispatch => {
    connect(URI)
      .then(() => School.find({ _id: id }))
      .then(school => {
        school[0].orders.push(order);
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
        const orderData = Order.create({
          name: order.name,
          div: order.div,
          size: order.size,
          day1: orderChoices(order.size, order.day1),
          day2: orderChoices(order.size, order.day2),
          day3: orderChoices(order.size, order.day3),
          day4: orderChoices(order.size, order.day4),
          day5: orderChoices(order.size, order.day5),
          juiceFruits: juiceFruits(order.juice, order.fruits)
        });
        return orderData.save();
      })
      .then(orderData => {
        dispatch(createOrderSuccess(orderData));
        dispatch(updateSchoolOrder(id, orderData));
      });
  };
}

export function deleteOrder(id) {
  return dispatch => {
    connect(URI)
      .then(() => Order.find({ _id: id }))
      .then(order => order[0].delete())
      .then(numDeleted => {
        dispatch(deleteOrderSuccess(numDeleted));
      });
  };
}

export function deleteOrderFromSchool(id) {
  return dispatch => {
    connect(URI)
      .then(() => School.find({ orders: id }))
      .then(school => {
        school[0].orders.splice(school[0].orders.indexOf(id), 1);
        return school[0].save();
      })
      .then(newSchool => {
        dispatch(deleteOrder(id));
        dispatch(updateSchoolSuccess(newSchool));
        dispatch(loadSchools());
      });
  };
}
