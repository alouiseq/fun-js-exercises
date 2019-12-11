/* SOLUTION
Sliding window method and note that the substring can have extra characters since we're looking for the smallest substring where all the characters in the pattern are present:
Variables: matched, hashmap, smallest, left, right, temp
1. Put pattern into hashmap.
2. Outer loop traverses each character in str.
3. On each iteration, check if char is in the hashmap.
4. If it is, then decrement 1 from hashmap.
5. If not, then continue iteration.
6. If hashmap[char] >= 0, increment matched, and store in temp.
7. If matched === pattern.length, compare smallest with temp, and store the smaller of the two.
8. Shrink the window by incrementing left and repeating 3-8 with the left pointer.
9. If char is not in hashmap, return smallest.
Time: O(n + m) where n is str.length and m is pattern.length
Space: O(n + m) where n is the chars in the pattern and m is chars in temp.
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
