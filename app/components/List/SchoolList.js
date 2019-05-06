import React from 'react';
import PropTypes from 'prop-types';

import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import ResetSearch from '@material-ui/icons/Clear';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import NextPage from '@material-ui/icons/ChevronRight';
import PreviousPage from '@material-ui/icons/ChevronLeft';
import Delete from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Check from '@material-ui/icons/Check';
import ThirdStateCheck from '@material-ui/icons/Remove';

const SchoolList = ({ schools, deleteSchool, history }) => (
  <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      columns={[{ title: 'Name', field: 'name' }]}
      data={schools}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log('edit');
              resolve();
            }, 1000);
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteSchool(oldData._id);
              resolve();
            }, 1000);
          })
      }}
      onRowClick={(event, selectedRow) =>
        history.push(`/app/orders/${selectedRow._id}`)
      }
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
        Check,
        ThirdStateCheck,
        Clear,
        Edit
      }}
    />
  </div>
);

SchoolList.propTypes = {
  schools: PropTypes.arrayOf(Object).isRequired,
  deleteSchool: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default SchoolList;
