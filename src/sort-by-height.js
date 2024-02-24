const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexNegative = [];
  arr.forEach((element, index) => {
    if (element < 0) {
      indexNegative.push(index);
    }
  });
  const sortArr = arr.sort((a, b) => a - b);
  for (let i = sortArr.length - 1; i >= 0; i--) {
    if (sortArr[i] < 0) {
      sortArr.splice(i, 1);
    }
  }
  indexNegative.forEach((index) => {
    sortArr.splice(index, 0, -1);
  });
  return sortArr;
}

module.exports = {
  sortByHeight
};
