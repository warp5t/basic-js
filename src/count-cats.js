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
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};

function countCats(arr){
  let counter = 0;
  for(let i = 0; arr.lenght > i; i++){
    for(let j; i.lenght > j; j++){
      if(arr[j] == '^^') {
          counter++;
      }
    }
  }
  return counter;
}