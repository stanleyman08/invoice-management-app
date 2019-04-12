import db from "../db.js"

export const createSchool = async(name) => {
	const school = await db.schools.insert({name: name, orders: []});
	return school;
};

export const getAllSchools = async() => {
	const schools = await db.schools.find({});
	return schools;
}

export const deleteSchool = async(id) => {
	db.schools.remove({_id: id});
}

export const createOrder = async(name, orderData) => {
	const order = await db.schools.update({name: name}, { $addToSet: { orders: orderData}}, {});
	return order;
}

export const deleteOrder = async(id) => {
	// db.schools.remove({_id:})
}