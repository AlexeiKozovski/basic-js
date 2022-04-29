const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');

  let monthNumber = date.getMonth();
  if (monthNumber === 11 || monthNumber < 2) {
    return "winter";
  } else if (monthNumber < 5){
    return "spring";
  } else if (monthNumber < 8){
    return "summer";
  } else if (monthNumber < 11){
    return "autumn"
  }
}

module.exports = {
  getSeason
};
