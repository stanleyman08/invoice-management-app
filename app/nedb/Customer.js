const Document = require('camo').Document;
const EmbeddedDocument = require('camo').EmbeddedDocument;

class Order extends EmbeddedDocument {
  constructor() {
    super();

    this.name = String;
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

    this.name = String;
    this.div = String;
    this.orders = [Order];
  }
}

export default Customer;
