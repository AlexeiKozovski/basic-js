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
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  let arrayOnlyName = [];
  let arrayFirstLetter = [];

  members.forEach(name => {
    if (typeof name === 'string' && name != '') arrayOnlyName.push(name.trim().toUpperCase())
  });

  arrayOnlyName.forEach(letter => {
    arrayFirstLetter.push(letter[0])
  })

  return  arrayFirstLetter.sort().join('');  
}

module.exports = {
  createDreamTeam
};
