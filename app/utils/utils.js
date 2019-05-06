export function orderChoices(size, choice) {
  if (choice === '') {
    return '';
  }
  if (size === 'regular') {
    return choice;
  }
  if (size === 'medium') {
    return `m${choice}`;
  }
  return `l${choice}`;
}

export function juiceFruits(juice, fruits) {
  if (juice && fruits) {
    return '';
  }
  if (juice && !fruits) {
    return 'nof';
  }
  if (!juice && fruits) {
    return 'nod';
  }
  return 'no';
}

function juiceFruitsToDaysString(day, jf) {
  if (jf === '') {
    return day;
  }
  return `${day}, ${jf}`;
}

function appendJuiceFruitsToDays(orders) {
  let newOrders = [];
  orders.forEach(order => {
    const newData = {
      orderName: order.orderName,
      div: order.div,
      size: order.size,
      day1: juiceFruitsToDaysString(order.day1, order.day1JuiceFruits),
      day2: juiceFruitsToDaysString(order.day2, order.day2JuiceFruits),
      day3: juiceFruitsToDaysString(order.day3, order.day3JuiceFruits),
      day4: juiceFruitsToDaysString(order.day4, order.day4JuiceFruits),
      day5: juiceFruitsToDaysString(order.day5, order.day5JuiceFruits)
    };
    newOrders = newOrders.concat(newData);
  });
  return newOrders;
}

export function arrayOfOrders(customers) {
  let orders = [];
  if (typeof customers !== 'undefined') {
    customers.forEach(customer => {
      orders = orders.concat(customer.orders);
    });
  }

  orders = appendJuiceFruitsToDays(orders);
  return orders;
}
