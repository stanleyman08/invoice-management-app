import db from '../db.js';

/**
 * Create school entry in schools.db
 * @param  {string} name name of the school
 * @return {[type]}      [description]
 */
export const createSchool = async name => {
  const school = await db.schools.insert({ name, orders: [] });
  return school;
};

/**
 * Get a list of schools
 * @return {array} list of schools with the following properties: name, orders
 */
export const getAllSchools = async () => {
  const schools = await db.schools.find({});
  return schools;
};

/**
 * Remove school entry in schools.db
 * @param  {string} id the unique __id which matches the entry you want to delete in schools
 * @return {[type]}    [description]
 */
export const deleteSchool = async id => {
  db.schools.remove({ _id: id });
};
/**
 * Create order and append to the orders properties within a school
 * @param  {string} name   name of the school that the order is associated with
 * @param  {object} orderData object that has the following properties: name, div, size
 * @return {[type]}           [description]
 */
export const createOrder = async (name, orderData) => {
  const order = await db.schools.update(
    { name },
    { $addToSet: { orders: orderData } },
    {}
  );
  return order;
};

export const deleteOrder = async id => {
  // db.schools.remove({_id:})
};
