import React from 'react';
import PropTypes from 'prop-types';

import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import ResetSearch from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import NextPage from '@material-ui/icons/ChevronRight';
import PreviousPage from '@material-ui/icons/ChevronLeft';

const OrderList = ({ orders }) => (
  <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Div', field: 'div' },
        { title: 'Size', field: 'size' },
        { title: 'Day1', field: 'day1' },
        { title: 'Day2', field: 'day2' },
        { title: 'Day3', field: 'day3' },
        { title: 'Day4', field: 'day4' },
        { title: 'Day5', field: 'day5' },
        { title: 'juiceFruits', field: 'juiceFruits' }
      ]}
      data={orders}
      options={{
        showTitle: false
      }}
      icons={{
        Search,
        ResetSearch,
        FirstPage,
        LastPage,
        NextPage,
        PreviousPage
      }}
    />
  </div>
);

OrderList.propTypes = {
  orders: PropTypes.arrayOf(Object).isRequired
};

export default OrderList;
