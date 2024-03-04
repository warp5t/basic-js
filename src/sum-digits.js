const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const stringNumber = n.toString();
  let arrNumber = stringNumber.split('');
  let result = 0;
  arrNumber.forEach((element) => {
    result += Number(element);
  });
  while (result >= 10) {
    arrNumber = result.toString().split('');
    result = 0;
    arrNumber.forEach((element) => {
      result += Number(element);
    });
  }
  return result;
 }

module.exports = {
  getSumOfDigits
};
