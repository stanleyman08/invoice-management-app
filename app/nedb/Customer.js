import { juiceFruits, orderChoices } from '../utils/utils.js';

const { Document } = require('camo');
const { EmbeddedDocument } = require('camo');

class Order extends EmbeddedDocument {
  constructor() {
    super();
    this.date = Date;
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

  set ordersData(data) {
    this.orders.push(
      Order.create({
        date: data.date.toDateString(),
        orderName: data.order.orderName,
        div: data.order.div,
        size: data.order.size,
        day1: orderChoices(data.order.size, data.order.day1),
        day2: orderChoices(data.order.size, data.order.day2),
        day3: orderChoices(data.order.size, data.order.day3),
        day4: orderChoices(data.order.size, data.order.day4),
        day5: orderChoices(data.order.size, data.order.day5),
        day1JuiceFruits: juiceFruits(
          data.order.day1Juice,
          data.order.day1Fruits
        ),
        day2JuiceFruits: juiceFruits(
          data.order.day2Juice,
          data.order.day2Fruits
        ),
        day3JuiceFruits: juiceFruits(
          data.order.day3Juice,
          data.order.day3Fruits
        ),
        day4JuiceFruits: juiceFruits(
          data.order.day4Juice,
          data.order.day4Fruits
        ),
        day5JuiceFruits: juiceFruits(
          data.order.day5Juice,
          data.order.day5Fruits
        )
      })
    );
  }

  static getTotalOrdersCount() {
    const day1 = Customer.find({ 'orders.day1': 'a' });
    return day1;
  }
}

export default Customer;
