/*
Check if we can sort the string. If so, this will simplify the problem since we won't have to keep track of which characters have been replaced. Let's assume that we cannot sort so that the characters stay in place where they are.

Solution: Use a modified no repeat substring function (returns the range of the longest substring instead of longest value) to find the left and right indices of the longest distinct substring (we'll call distinctString). Then use a left pointer to traverse distinctString from start towards the left side as long as there is enough per the k value. If not, then use the right index to traverse towards the right side of distinctString. Deduct from k and when k === 0, calculate the longest substring.
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
