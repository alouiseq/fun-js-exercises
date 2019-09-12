/*
Q: Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Note: The string size will be in the range [1, 100].
*/
/**
 * @param {string} s
 * @return {boolean}
 */
/* Solution 1: O(n)
***NOTE: This solution assumes that a left paren should be immediately followed by a right paren or '*' which will invalidate (()).
Declare a variable next to store an array of the left and right parenthesis.
1. Iterate over string s and compare each character against the first elem in next.
2. If the current char === next OR is equal to *, then increment the index and remove the first elem in next and push to the end (effectively toggling between parens).
3. If the current char !== next or *, return false.
4. When index reaches the end of s, return true.
*/
/* Solution 2:
***NOTE: This solution assumes that a left paren does not have to be immediately followed by a right paren or '*'. (()) is still valid as long as the parens match and can close.
Use 2 stacks to store '(' and '*'. The ')' does not need to be store in a stack because once this paren has been reached, it can be matched immediately against the values in the other stacks.
1. Iterate over s and push '(' and '*' onto their respective stacks.
2. If ')' is encountered, pop the '(' stack.
3. If the popped value exists, then continue with the iteration.
4. If the popped value doesn't exist, check the '*' stack.
5. If the value in the '*' stack exists, continue with the iteration.
6. If the value in the '*' doesn't exist, return false.
7. When the iteration is done, return true.
*/
// TODO: Use Solution 2
var checkValidString = function(s) {
  let next = ['(', ')'];
  
  for (let ch of s) {
    if (ch === '*') continue;
    let paren = next.shift();
    if (ch === paren) next.push(paren)
    else return false;
  }
  return true;
};

const input1 = '()';   // True
const input2 = '(*)';   // True
const input3 = '(*))';   // True

console.log(checkValidString(input1));
console.log(checkValidString(input2));
console.log(checkValidString(input3));