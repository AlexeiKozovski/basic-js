const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  arrS1 = Array.from(s1);
  arrS2 = Array.from(s2);
  for (i = 0; i < arrS1.length; i++){
    for (j = 0; j < arrS2.length; j++){
      if (arrS1[i] === arrS2[j]){
        count++;
        arrS2.splice(j, 1);
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
