import db from "../db.js"

export const createSchool = async(name) => {
	const school = await db.schools.insert({name: name});
	return school;
};

export const getAllSchools = async() => {
	const schools = await db.schools.find({});
	return schools
}

export const deleteSchool = async(id) => {
	db.schools.remove({_id: id});
}
