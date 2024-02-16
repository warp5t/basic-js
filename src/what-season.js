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
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

//   let month;
//   let season;
//   month = Number(date.getMonth());
//   if(month >= 0 && month <= 2){
//     season = 'winter';
//   }
//   else if(month >= 3 && month <= 5){
//     season = 'spring';
//   }
//   else if(month >= 6 && month <= 8){
//     season = 'summer';
//   }
//   else if(month >= 6 && month <= 8){
//     season = 'autumn';
//   }
//   return season;
// }
}

module.exports = {
  getSeason
};
