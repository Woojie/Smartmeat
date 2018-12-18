module.exports.calculate = (order, quantity, frequency) => {
  let weeksInYear = 52
  let result;
  quantity = Number(quantity)
  frequency = Number(frequency)
  switch (order) {
    case 'hamburger':
      result = Math.round(quantity * frequency * weeksInYear * 3.7)
      break;
    case 'steak':
      result = Math.round(quantity * frequency * weeksInYear * 3.5)
      break;
    case 'beef':
      result = Math.round(quantity * frequency * weeksInYear * 3)
      break;
    default:
      result = '0';
  }
  return result
}