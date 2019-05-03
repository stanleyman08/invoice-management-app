import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const SummaryList = ({ summary }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Orders</TableCell>
        <TableCell>Day1</TableCell>
        <TableCell>Day2</TableCell>
        <TableCell>Day3</TableCell>
        <TableCell>Day4</TableCell>
        <TableCell>Day5</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>a</TableCell>
        {summary.map((item, index) => (
          <TableCell key={index}>{item.a}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell>b</TableCell>
        {summary.map((item, index) => (
          <TableCell key={index}>{item.b}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell>ma</TableCell>
        {summary.map((item, index) => (
          <TableCell key={index}>{item.ma}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell>mb</TableCell>
        {summary.map((item, index) => (
          <TableCell key={index}>{item.mb}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell>la</TableCell>
        {summary.map((item, index) => (
          <TableCell key={index}>{item.la}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell>lb</TableCell>
        {summary.map((item, index) => (
          <TableCell key={index}>{item.lb}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell>juice</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>fruits</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

SummaryList.propTypes = {
  summary: PropTypes.arrayOf(Object).isRequired
};

export default SummaryList;
