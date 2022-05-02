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
  const _repeatTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
  const _separator = options.hasOwnProperty("separator") ? options.separator + "" : "+";
  const _addition = options.hasOwnProperty("addition") ? options.addition + "" : "";
  const _additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
  const _additionSeparator = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : "|";

  let additionResultString = [];
  for (let i = 0; i < _additionRepeatTimes; i++) {
    additionResultString.push(_addition);
  }
  additionResultString = additionResultString.join(_additionSeparator);

  let resultString = [];
  for (let i = 0; i < _repeatTimes; i++) {
    resultString.push(str+additionResultString);
  }
  return resultString.join(_separator);
}

module.exports = {
  repeater
};
