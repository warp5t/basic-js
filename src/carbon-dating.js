const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  throw new NotImplementedError('Not implemented');
  // let calcLn,caclAge;
  // let probe = Number(sampleActivity);
  // if(sampleActivity >= MODERN_ACTIVITY) return false;
  // if(sampleActivity === null) return false;
  // if(sampleActivity === undefined) return false;
  // if(typeof(probe) == 'number'){
  //   calcLn = Math.log(MODERN_ACTIVITY/probe) / Math.log(2.718282);
  //  console.log(calcLn);
  // caclAge = calcLn / 0.000122;
  // caclAge = Math.ceil(caclAge);
  // }
  // else return false;
  // if(caclAge > 55000 || caclAge < 0){
  //   return false;
  // }
  // else return caclAge;
}

module.exports = {
  dateSample
};








