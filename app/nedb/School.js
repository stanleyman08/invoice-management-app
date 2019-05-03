import Customer from './Customer.js';

const { Document } = require('camo');

class School extends Document {
  constructor() {
    super();

    this.name = String;
    this.customers = [Customer];
  }

  get schoolName() {
    return this.name;
  }

  static getData() {
    const data = this.find({});
    return data;
  }

  static getSchool(id) {
    const data = this.find({ _id: id });
    return data;
  }
}

export default School;
