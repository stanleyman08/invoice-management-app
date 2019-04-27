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
