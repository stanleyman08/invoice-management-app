import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import SchoolList from '../../app/components/List/SchoolList.js';

// jest.mock('../../app/utils/SchoolAPI.js', () => ({
//   deleteSchool: jest.fn()
// }));

Enzyme.configure({ adapter: new Adapter() });

describe('SchoolList component', () => {
  it('renders without throwing an error', () => {
    const schools = [];
    const component = shallow(<SchoolList schools={schools} />);
    expect(component).toMatchSnapshot();
  });

  it('shows no schools if schools is empty', () => {
    const schools = [];
    const component = mount(
      <MemoryRouter>
        <SchoolList schools={schools} />
      </MemoryRouter>
    );
    expect(component.find('ListItem')).toHaveLength(0);
  });

  it('shows a list of schools if schools exist: 1 school', () => {
    const schools = [{ name: 'Churchill', orders: [], _id: 'mockid1' }];
    const component = mount(
      <MemoryRouter>
        <SchoolList schools={schools} />
      </MemoryRouter>
    );
    expect(component.find('ListItem')).toHaveLength(1);
    expect(component.find('ListItem').text()).toEqual('Churchill');
  });

  it('shows a list of schools if schools exist: multiple schools', () => {
    const schools = [
      { name: 'Churchill', orders: [], _id: 'mockid1' },
      { name: 'Windermere', orders: [], _id: 'mockid2' },
      { name: 'Van Tech', orders: [], _id: 'mockid3' }
    ];
    const component = mount(
      <MemoryRouter>
        <SchoolList schools={schools} />
      </MemoryRouter>
    );
    expect(component.find('ListItem')).toHaveLength(3);
  });
});
