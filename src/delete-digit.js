const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxValue = 0;
  const numStr = n.toString();  
  for (let i = 0; i < numStr.length; i++) {
    let arr = numStr.split('');
    arr.splice(i, 1);
    arrNum = +arr.join('');    
    if (arrNum > maxValue) {
      maxValue = arrNum;
    }
  }
  return maxValue;
}

module.exports = {
  deleteDigit
};
