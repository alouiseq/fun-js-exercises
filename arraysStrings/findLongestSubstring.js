// Problem: Find the longest substring without character duplication
/* Solution:
Use the sliding window pattern.
Use a map to store the string characters as keys and their index location as values.
Use a count variable that tracks the length of the substring.
Use a max variable to store the longest substring.
1. Start a while loop that exits when the starting index is >= string.length.
2. Traverse the string and check if the character exists in the hash.
3. If it doesn't exist, store the character index in the hash.
4. Increment count by 1.
5. Continue with the loop.
6. If the character exists in the hash, check if count > max and store the longest in max.
7. Reset store and count.
8. Assign the duplicating character index + 1 to the index variable.
9. Continue with the loop.
10. Return max.
Time Complexity: O(n)
*/
function findLongestSubstring(str){
  let store = {}
  let i = 0
  let count = 0
  let max = 0
  
  while(i < str.length) {
    let val = store[str[i]]
    if(!val && val !== 0) {
        store[str[i]] = i
        count++
        i++
    } else {
        if(count > max) {
            max = count
        }
        store = {}
        count = 0
        i = val + 1
    }
  }
  return max
}

console.log(findLongestSubstring('longestsubstring'));
