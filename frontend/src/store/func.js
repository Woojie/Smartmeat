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
    case 'cheeseburger':
      result = Math.round(quantity * frequency * weeksInYear * 8.7)
      break;
    case 'chickenburger':
      result = Math.round(quantity * frequency * weeksInYear * 1.36)
      break;
    case 'eggs': 
      result = Math.round(quantity * frequency * weeksInYear * 0.55)
      break;
      
    default:
      result = '0';
  }
  return result
}