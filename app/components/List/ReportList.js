import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ReportList = ({ reports }) => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>a</TableCell>
        <TableCell>{reports.a}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>b</TableCell>
        <TableCell>{reports.b}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>ma</TableCell>
        <TableCell>{reports.ma}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>mb</TableCell>
        <TableCell>{reports.mb}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>la</TableCell>
        <TableCell>{reports.la}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>lb</TableCell>
        <TableCell>{reports.lb}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

ReportList.propTypes = {
  reports: PropTypes.object.isRequired
};

export default ReportList;
