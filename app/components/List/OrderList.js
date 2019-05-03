import React from 'react';
import PropTypes from 'prop-types';

import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import ResetSearch from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import NextPage from '@material-ui/icons/ChevronRight';
import PreviousPage from '@material-ui/icons/ChevronLeft';
import Delete from '@material-ui/icons/DeleteOutline';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';

const OrderList = ({ schoolId, orders, deleteOrder }) => (
  <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      columns={[
        { title: 'Name', field: 'orderName' },
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
      editable={{
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteOrder(schoolId, oldData);
              resolve();
            }, 1000);
          })
      }}
      options={{
        showTitle: false,
        actionsColumnIndex: -1
      }}
      icons={{
        Search,
        ResetSearch,
        FirstPage,
        LastPage,
        NextPage,
        PreviousPage,
        Delete,
        Clear,
        Check
      }}
    />
  </div>
);

OrderList.propTypes = {
  schoolId: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(Object).isRequired,
  deleteOrder: PropTypes.func.isRequired
};

export default OrderList;
