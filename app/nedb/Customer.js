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
    this.day1JuiceFruits = {
      type: String,
      choices: ['', 'no', 'nod', 'nof']
    };
    this.day2JuiceFruits = {
      type: String,
      choices: ['', 'no', 'nod', 'nof']
    };
    this.day3JuiceFruits = {
      type: String,
      choices: ['', 'no', 'nod', 'nof']
    };
    this.day4JuiceFruits = {
      type: String,
      choices: ['', 'no', 'nod', 'nof']
    };
    this.day5JuiceFruits = {
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
        day1JuiceFruits: juiceFruits(order.day1Juice, order.day1Fruits),
        day2JuiceFruits: juiceFruits(order.day2Juice, order.day2Fruits),
        day3JuiceFruits: juiceFruits(order.day3Juice, order.day3Fruits),
        day4JuiceFruits: juiceFruits(order.day4Juice, order.day4Fruits),
        day5JuiceFruits: juiceFruits(order.day5Juice, order.day5Fruits)
      })
    );
  }

  static getTotalOrdersCount() {
    const day1 = Customer.find({ 'orders.day1': 'a' });
    return day1;
  }
}

export default Customer;
