import Order from './Order.js';

const Document = require('camo').Document;

class School extends Document {
  constructor() {
    super();

    this.name = String;
    this.orders = [Order];
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
