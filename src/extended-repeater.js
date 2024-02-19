const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let stringResult = '';

  const {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|'
  } = options || {};

  const mainString = String(str);
  const additionalString = String(addition);

  for (let i = 0; i < repeatTimes; i++) {
      stringResult += mainString;

      for (let j = 0; j < additionRepeatTimes; j++) {
          stringResult += additionalString;
          if (j < additionRepeatTimes - 1) {
              stringResult += additionSeparator;
          }
      }
      if (i < repeatTimes - 1) {
          stringResult += separator;
      }
  }
  return stringResult;
}

module.exports = {
  repeater
};
