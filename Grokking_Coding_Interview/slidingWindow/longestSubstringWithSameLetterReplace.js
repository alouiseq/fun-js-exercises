/*  TODO
Solution: Use the sliding window pattern. Use left and right pointers. Outer loop traverses the string with the right pointer and continues while currentChar === previousChar. If not, deduct 1 from k and continue string traversal as long as k >= 0. Also use a stack to track the next character position index. If the currentChar !== previousChar and k === 0, calculate the longest substring length by rightPointer - leftPointer, then set the left pointer index by popping from the stack and using that index value, and lastly increment k. Continue these steps until the right pointe reaches the end of string. Return the longest substring.
Time: O(n)
Space: O(n)
*/

const lengthOfLongestSubstring = function(str, k) {
    let max = -Infinity; 
    let temp = -Infinity;
    let left = 0;
    let repeatLeft = k;
    const stack = [];

    if(!k) return 0;
    let compareChar = str[0];

    for(let right=0; right<str.length; right++){
        if(compareChar !== str[right] && repeatLeft){
            repeatLeft--;
            stack.push(right);
            console.log('stack', stack);
        }else if (compareChar !== str[right]){
            temp = right - left;
            max = max > temp ? max : temp;
            left = stack.pop();
            compareChar = str[left];
            if(compareChar === str[right]) repeatLeft++;
            else stack.push(right);
            console.log('no repeats left: temp', temp)
        }else{
            console.log('char matches with', compareChar);
        }
    }
    temp = str.length - left;
    max = max > temp ? max : temp;

    return max;
};

'aabcfaaaaa'
const input = 'aabccbb', k = 2;     // output: 5
// const input = 'abbcb', k = 1;    // output: 4
// const input = 'abccde', k = 1;   // output: 3

console.log('output', lengthOfLongestSubstring(input, k));
