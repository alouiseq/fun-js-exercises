/*  TODO
Solution: Use the sliding window pattern. Use left and right pointers. Outer loop traverses the string with the right pointer and continues while currentChar === previousChar. If not, deduct 1 from k and continue string traversal as long as k >= 0. Also use a stack to track the next character position index. If the currentChar !== previousChar and k === 0, calculate the longest substring length by rightPointer - leftPointer, and then set the left pointer index by popping from the stack and using that index value. Continue these steps until the right pointe reaches the end of string. Return the longest substring.
Time: O(n)
Space: O(n)
*/

const lengthOfLongestSubstring = function(str, k) {
    let max = 0;
    let left = 0;
    let right = 0;
    const chars = {};

    return -1;
};

'aabcfaaaaa'
const input = 'aabccbb', k = 2;
// const input = 'abbcb', k = 1;
// const input = 'abccde', k = 1;

console.log('output', lengthOfLongestSubstring(input, k))    // output: 5
