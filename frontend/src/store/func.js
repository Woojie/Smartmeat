module.exports.alterReport = (oldReport, newReport, alteredReports, email) => {
  newReport.email = email
  newReport.id = oldReport.id
  let ifReportExists = alteredReports.filter((report)=> report.id !== oldReport.id)
  let newAlteredReports;
  if(ifReportExists.length !== alteredReports.length) {
    newAlteredReports =  ifReportExists.concat(newReport)

  }else {
    newAlteredReports = alteredReports.concat(newReport)
  }
  return newAlteredReports
}

module.exports.deleteReport = (user, id) => {
  let newReport = user.reports.filter(report=>report.id !== id) 
  let alterdReport = user.alteredReports.filter(report=>id !== report.id)
  user.reports = newReport
  user.alteredReports = alterdReport
  return user
}

module.exports.calculate = (order, quantity, frequency) => {
  let weeksInYear = 52
  let result;
  quantity = Number(quantity)
  frequency = Number(frequency)
  switch (order) {
    case 'hamburger':
      result = Math.round(quantity * frequency * weeksInYear * 3.7)
      break
    case 'steak':
      result = Math.round(quantity * frequency * weeksInYear * 3.5)
      break
    case 'beef':
      result = Math.round(quantity * frequency * weeksInYear * 3)
      break
    case 'cheeseburger':
      result = Math.round(quantity * frequency * weeksInYear * 8.7)
      break
    case 'chickenburger':
      result = Math.round(quantity * frequency * weeksInYear * 1.36)
      break
    case 'eggs': 
      result = Math.round(quantity * frequency * weeksInYear * 0.55)
      break
    case 'beer':
      result = Math.round(quantity * frequency * weeksInYear * 0.66)
      break
    case 'tunasandwich':
      result = Math.round(quantity * frequency * weeksInYear  *.942)
      break
    case 'coffee':
      result = Math.round(quantity * frequency * weeksInYear * 0.42)
      break
    case 'blt':
      result = Math.round(quantity * frequency * weeksInYear * 1.007)
      break
    default:
      result = '0';
  }
  return result
}