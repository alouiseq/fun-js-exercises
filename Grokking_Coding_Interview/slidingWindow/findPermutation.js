/* SOLUTION
Use sliding window pattern similar to longestSubstringWithDistinctCharacters. Use a hashmap to store the pattern. Use 2 ptrs to control the window size and ensure it's the size of the pattern. If moving the window forward, restore the left side data of the window that goes out after moving it. If the variable match === size of hashmap, then return TRUE, otherwise return FALSE after the end of the loop.
Time: O(n) where n is the input string length
Space: O(m) where m is the pattern length
*/
const find_permutation = function(str, pattern) {
    const hashmap = {};
    let matched = 0;
    let start = 0;
    let windowSize = 0;

    for(let i in pattern){
      let ch = pattern[i];
      if(ch in hashmap) hashmap[ch]++;
      else hashmap[ch] = 1;
    }

    for(let end=0; end<str.length; end++){
      let ch = str[end];
      if(ch in hashmap){
        hashmap[ch]--;
        if(!hashmap[ch]){
          matched++;
        }
      }
      windowSize = end - start + 1;
      if(windowSize > pattern.length){
        let prev = str[start];
        if(prev in hashmap){
          hashmap[prev]++;
          if(hashmap[prev] > 0) matched--;
        }
        start++;
      }
      if(matched === Object.keys(hashmap).length){
        return true;
      }
    }
    return false;
  };

const inputSet = [];
let input = '', pattern = '';
input = 'oidbcaf', pattern = 'abc';   // true
inputSet.push([input, pattern]);
input = 'odicf', pattern = 'dc';    // false
inputSet.push([input, pattern]);
input = 'bcdxabcdy', pattern = 'bcdyabcdx';   // true
inputSet.push([input, pattern]);
input = 'aaacb', pattern = 'abc';   // true
inputSet.push([input, pattern]);

for(let input of inputSet){
  console.log('Input', input, 'Output', find_permutation(...input));
}
