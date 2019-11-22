/*  TODO
Solution: Use the sliding window pattern. Use left and right pointers. Outer loop traverses the string with the right pointer and continues while currentChar === previousChar. If not, deduct 1 from k and continue string traversal as long as k >= 0. Also use a stack to track the next character position index. If the currentChar !== previousChar and k === 0, calculate the longest substring length by rightPointer - leftPointer, then set the left pointer index by popping from the stack and using that index value, and lastly increment k. Continue these steps until the right pointe reaches the end of string. Return the longest substring.
Time: O(n)
Space: O(n)
*/

const lengthOfLongestSubstring = function(str, k) {
    let max = 0;
    let left = 0;
    let repeatLeft = k;
    const stack = [];

    if(!k) return 0;
    max = 1;

    for(let curr=1; curr<str.length; curr++){
        prev = curr - 1;
        max = curr - left;
        if(str[prev] !== str[curr] && repeatLeft){
            repeatLeft--;
            stack.push(curr);
        }else if (str[prev] !== str[curr]){
            // max = curr - left;
            left = stack.pop();
            repeatLeft++;
        }
    }

    return max;
};

'aabcfaaaaa'
const input = 'aabccbb', k = 2;     // output: 5
// const input = 'abbcb', k = 1;    // output: 3
// const input = 'abccde', k = 1;   // output: 3

console.log('output', lengthOfLongestSubstring(input, k));
