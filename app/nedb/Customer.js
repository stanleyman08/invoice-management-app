import { juiceFruits, orderChoices } from '../utils/utils.js';

const { Document } = require('camo');
const { EmbeddedDocument } = require('camo');

class Order extends EmbeddedDocument {
  constructor() {
    super();
    this.orderName = String;
    this.div = String;
    this.size = {
      type: String,
      choices: ['', 'regular', 'medium', 'large']
    };
    this.day1 = {
      type: String,
      choices: ['', 'a', 'b', 'ma', 'mb', 'la', 'lb']
    };
    this.day2 = {
      type: String,
      choices: ['', 'a', 'b', 'ma', 'mb', 'la', 'lb']
    };
    this.day3 = {
      type: String,
      choices: ['', 'a', 'b', 'ma', 'mb', 'la', 'lb']
    };
    this.day4 = {
      type: String,
      choices: ['', 'a', 'b', 'ma', 'mb', 'la', 'lb']
    };
    this.day5 = {
      type: String,
      choices: ['', 'a', 'b', 'ma', 'mb', 'la', 'lb']
    };
    this.juiceFruits = {
      type: String,
      choices: ['', 'no', 'nod', 'nof']
    };
  }
}

class Customer extends Document {
  constructor() {
    super();

    this.customerName = String;
    this.orders = [Order];
  }

  set ordersData(order) {
    this.orders.push(
      Order.create({
        orderName: order.orderName,
        div: order.div,
        size: order.size,
        day1: orderChoices(order.size, order.day1),
        day2: orderChoices(order.size, order.day2),
        day3: orderChoices(order.size, order.day3),
        day4: orderChoices(order.size, order.day4),
        day5: orderChoices(order.size, order.day5),
        juiceFruits: juiceFruits(order.juice, order.fruits)
      })
    );
  }

  static getTotalOrdersCount() {
    const day1 = Customer.find({ 'orders.day1': 'a' });
    return day1;
  }
}

export default Customer;
