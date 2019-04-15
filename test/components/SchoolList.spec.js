import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router'

jest.mock("../../app/utils/SchoolAPI.js", () => ({
	deleteSchool: jest.fn()
}));
import SchoolList from "../../app/components/Orders/SchoolList.js";

Enzyme.configure({ adapter: new Adapter() });

describe("SchoolList component", () => {
	it("renders without throwing an error", () => {
		const component = shallow(<SchoolList />);
		expect(component).toMatchSnapshot();
	});

	it("shows no schools if schoolsData is empty", () => {
		const schoolsData = [];
		const component = mount(<MemoryRouter><SchoolList schoolsData={schoolsData}/></MemoryRouter>);
		expect(component.find("ListItem")).toHaveLength(0);
	});

	it("shows a list of schools if schoolsData exist: 1 school", () => {
		const schoolsData = [{"name":"Churchill","orders":[]}];
		const component = mount(<MemoryRouter><SchoolList schoolsData={schoolsData}/></MemoryRouter>);
		expect(component.find("ListItem")).toHaveLength(1);
		expect(component.find("ListItem").text()).toEqual("Churchill");
	});

	it("shows a list of schools if schoolsData exist: multiple schools", () => {
		const schoolsData = [{"name":"Churchill","orders":[]}, 
							{"name":"Windermere", "orders":[]},
							{"name":"Van Tech", "orders":[]}];
		const component = mount(<MemoryRouter><SchoolList schoolsData={schoolsData}/></MemoryRouter>);
		expect(component.find("ListItem")).toHaveLength(3);
	});
});