import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

// core components
import Button from '../CustomButtons/Button.js';

const styles = {
  root: {
    height: '30px'
  }
};

class OrderForm extends React.Component {
  onSubmit = values => {
    const { schoolId, createOrder, onHandleClose } = this.props;
    createOrder(schoolId, values);
    onHandleClose();
  };

  render() {
    const { openOrderForm, onHandleClose, classes } = this.props;
    return (
      <Dialog
        maxWidth="xs"
        disableEnforceFocus
        open={openOrderForm}
        onClose={onHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Order</DialogTitle>
        <DialogContent>
          <Form
            onSubmit={this.onSubmit}
            initialValues={{
              size: '',
              day1: '',
              day2: '',
              day3: '',
              day4: '',
              day5: '',
              day1Juice: true,
              day2Juice: true,
              day3Juice: true,
              day4Juice: true,
              day5Juice: true,
              day1Fruits: true,
              day2Fruits: true,
              day3Fruits: true,
              day4Fruits: true,
              day5Fruits: true
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Grid container alignItems="flex-start" spacing={8}>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="customerName"
                      component={TextField}
                      type="text"
                      label="Customer Name"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Field
                      fullWidth
                      name="orderName"
                      component={TextField}
                      type="text"
                      label="Order Name"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Field
                      fullWidth
                      name="div"
                      component={TextField}
                      type="text"
                      label="Div"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      name="size"
                      component={Select}
                      label="Size"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="regular">Regular</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="large">Large</MenuItem>
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Day1</FormLabel>
                      <RadioGroup className={classes.root} row>
                        <FormControlLabel
                          label="A"
                          control={
                            <Field
                              name="day1"
                              component={Radio}
                              type="radio"
                              value="a"
                            />
                          }
                        />
                        <FormControlLabel
                          label="B"
                          control={
                            <Field
                              name="day1"
                              component={Radio}
                              type="radio"
                              value="b"
                            />
                          }
                        />
                      </RadioGroup>
                      <FormGroup className={classes.root} row>
                        <FormControlLabel
                          label="Juice"
                          control={
                            <Field
                              name="day1Juice"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                        <FormControlLabel
                          label="Fruits"
                          control={
                            <Field
                              name="day1Fruits"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Day2</FormLabel>
                      <RadioGroup className={classes.root} row>
                        <FormControlLabel
                          label="A"
                          control={
                            <Field
                              name="day2"
                              component={Radio}
                              type="radio"
                              value="a"
                            />
                          }
                        />
                        <FormControlLabel
                          label="B"
                          control={
                            <Field
                              name="day2"
                              component={Radio}
                              type="radio"
                              value="b"
                            />
                          }
                        />
                      </RadioGroup>
                      <FormGroup className={classes.root} row>
                        <FormControlLabel
                          label="Juice"
                          control={
                            <Field
                              name="day2Juice"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                        <FormControlLabel
                          label="Fruits"
                          control={
                            <Field
                              name="day2Fruits"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Day3</FormLabel>
                      <RadioGroup className={classes.root} row>
                        <FormControlLabel
                          label="A"
                          control={
                            <Field
                              name="day3"
                              component={Radio}
                              type="radio"
                              value="a"
                            />
                          }
                        />
                        <FormControlLabel
                          label="B"
                          control={
                            <Field
                              name="day3"
                              component={Radio}
                              type="radio"
                              value="b"
                            />
                          }
                        />
                      </RadioGroup>
                      <FormGroup className={classes.root} row>
                        <FormControlLabel
                          label="Juice"
                          control={
                            <Field
                              name="day3Juice"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                        <FormControlLabel
                          label="Fruits"
                          control={
                            <Field
                              name="day3Fruits"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Day4</FormLabel>
                      <RadioGroup className={classes.root} row>
                        <FormControlLabel
                          label="A"
                          control={
                            <Field
                              name="day4"
                              component={Radio}
                              type="radio"
                              value="a"
                            />
                          }
                        />
                        <FormControlLabel
                          label="B"
                          control={
                            <Field
                              name="day4"
                              component={Radio}
                              type="radio"
                              value="b"
                            />
                          }
                        />
                      </RadioGroup>
                      <FormGroup className={classes.root} row>
                        <FormControlLabel
                          label="Juice"
                          control={
                            <Field
                              name="day4Juice"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                        <FormControlLabel
                          label="Fruits"
                          control={
                            <Field
                              name="day4Fruits"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Day5</FormLabel>
                      <RadioGroup className={classes.root} row>
                        <FormControlLabel
                          label="A"
                          control={
                            <Field
                              name="day5"
                              component={Radio}
                              type="radio"
                              value="a"
                            />
                          }
                        />
                        <FormControlLabel
                          label="B"
                          control={
                            <Field
                              name="day5"
                              component={Radio}
                              type="radio"
                              value="b"
                            />
                          }
                        />
                      </RadioGroup>
                      <FormGroup className={classes.root} row>
                        <FormControlLabel
                          label="Juice"
                          control={
                            <Field
                              name="day5Juice"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                        <FormControlLabel
                          label="Fruits"
                          control={
                            <Field
                              name="day5Fruits"
                              component={Checkbox}
                              type="checkbox"
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Button onClick={onHandleClose}>Cancel</Button>
                  </Grid>
                  <Grid item>
                    <Button color="primary" type="submit">
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </DialogContent>
      </Dialog>
    );
  }
}

OrderForm.propTypes = {
  classes: PropTypes.object.isRequired,
  createOrder: PropTypes.func.isRequired,
  onHandleClose: PropTypes.func.isRequired,
  openOrderForm: PropTypes.bool.isRequired,
  schoolId: PropTypes.string.isRequired
};

export default withStyles(styles)(OrderForm);
