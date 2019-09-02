/* Problem:
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
Note: The input string may contain letters other than the parentheses ( and ).
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    
};

const input = '()())()';    // output: ["()()()", "(())()"]
const input = '(a)())()';    // output: ["(a)()()", "(a())()"]
const input = '")("';    // output: [""]

console.log(removeInvalidParentheses(input));