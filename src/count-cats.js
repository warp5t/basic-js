const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let counter = 0;
  arr.map((elem) => {
    for(let i = 0; elem.length > i; i++) {
      if (elem[i] === '^^') counter++;
    }
  });
  return counter;
}

module.exports = {
  countCats
};

