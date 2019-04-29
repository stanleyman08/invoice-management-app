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
import Edit from '@material-ui/icons/Edit';

const SchoolList = ({
  schools,
  deleteSchool,
  onHandleEditClickOpen,
  history
}) => (
  <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      columns={[{ title: 'Name', field: 'name' }]}
      data={schools}
      actions={[
        {
          icon: Edit,
          onClick: (event, rowData) => onHandleEditClickOpen(rowData.name)
        },
        {
          icon: Delete,
          onClick: (event, rowData) => deleteSchool(rowData._id)
        }
      ]}
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
        PreviousPage
      }}
    />
  </div>
);

SchoolList.propTypes = {
  schools: PropTypes.arrayOf(Object).isRequired,
  deleteSchool: PropTypes.func.isRequired,
  onHandleEditClickOpen: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default SchoolList;
