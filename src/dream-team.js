const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   console.log(members, 'input');
//   let team = '';
//   let index = 0;
//   let check = true;
//   if(members.length === 0) return false;
//   if(members === null) return false;
//   for(let i = 0; members.length > i; i++){
//     if(typeof(members[i]) == 'string'){
//       for(let j = 0; members[i].length > j; j++){
//         team[index] = members[i].toUpperCase();
//         index++;
//         break;
//       }
//     }
//     else{
//       check = false;
//       return false;
//      // break;
//     }
//   }
//  // team = toString(team);
//   if(check === false || typeof(team) !== 'string'){
//     return check;
//   }
//   else{
//     return team;
//   }

// }
}

module.exports = {
  createDreamTeam
};


