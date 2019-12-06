/* SOLUTION
Sliding window method where:
1. pattern goes into a hashmap.
2. Maintain a left and right pointers, a matched variable, and a smallest variable.
3. Use right pointer in the traversal loop.
4. Check if right index is in hashmap (charFrequency).
5. If it is then decrement charFrequency and continue loop interation.
6. If char in charFrequency is 0, then add 1 to match.
7. If matched === charFrequency length, compare the length of right-left to smallest.length,
8. If right-left is smaller than smallest, store substring between left and right indices to smallest.
9. If right pointer is not in charFrequency, increment left index and repeat steps 4-9.
10. End of loop, return smallest result.
Time: O(n + m) for str length and pattern length
Space: O(n) for hashmap
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
