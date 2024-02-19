const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrString = Array.from(str);
  let encodedString = '';
  let count = 1;
  for (let i = 0; i < arrString.length; i++) {
  if (arrString[i] === arrString[i + 1]) {
  count++;
  } else if (count > 1) {
  encodedString += count + arrString[i];
  count = 1;
  } else {
  encodedString += arrString[i];
  count = 1;
  }
  }
  return encodedString;
  }

module.exports = {
  encodeLine
};
