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

export function arrayOfOrders(customers) {
  let orders = [];
  if (typeof customers !== 'undefined') {
    customers.forEach(customer => {
      orders = orders.concat(customer.orders);
    });
  }
  return orders;
}
