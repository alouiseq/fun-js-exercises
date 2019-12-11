/* SOLUTION
Sliding window method and note that the substring can have extra characters since we're looking for the smallest substring where all the characters in the pattern are present:
1. Put pattern into hashmap.
2. Outer loop traverses each character in str.
3.
Time: O(n + m) where n is str.length and m is pattern.length
Space: O(n) 
*/
const find_substring = function(str, pattern) {
    // TODO: Write your code here
    return "";
}

const inputSet = [
    { str: 'aabdec', pattern: 'abc', expected: 'abdec' },
    { str: 'abdabca', pattern: 'abc', expected: 'abc' },
    { str: 'adcad', pattern: 'abc', expected: '' },
];

for(let input of inputSet){
    const {str, pattern} = input;
  console.log('Input', input, 'Output', `'${find_substring(str, pattern)}'`);
}
