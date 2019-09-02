/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
const phoneMapping = {
  1: [],
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m','n','o'],
  7: ['p','q','r','s'],
  8: ['t','u','v'],
  9: ['w','x','y','z'],
  0: [],
}

let comboRecurse = (base, y) => {
  if(y.length === 1) return [base.join('') + y[0]];
  return ((comboRecurse(base, y.slice(0, -1))).concat(base.join('') + y.slice(-1)));
}

var letterCombinations = function(digits) {
  const combos = [];
  
  const mappedNums = digits.split().map((val) => phoneMapping[val]);

  return combos;
};

let input;
input = '23'  // output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
letterCombinations(input);