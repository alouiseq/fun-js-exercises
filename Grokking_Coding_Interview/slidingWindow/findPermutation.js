/* SOLUTION
Use sliding window pattern similar to longestSubstringWithDistinctCharacters. Use a hashmap to store the pattern. Use 2 ptrs to control the window size and ensure it's the size of the pattern. If moving the window forward, restore the left side data of the window that goes out after moving it. If the variable match === size of hashmap, then return TRUE, otherwise return FALSE after the end of the loop.
*/
const find_permutation = function(str, pattern) {
    const hashmap = {};
    let matched = 0;
    let start = 0;

    for(let i in pattern){
      let ch = pattern[i];
      if(ch in hashmap) hashmap[ch]++;
      else hashmap[ch] = 1;
    }

    for(let end=0; end<str.length; end++){
      let ch = str[end];
      console.log(
        'hashmap', hashmap,
        'ch', ch,
        'matched', matched,
        'start', start,
        'end', end
      );
      if(hashmap[ch] && hashmap[ch] > 0){
        hashmap[ch]--;
        if(!hashmap[ch]){
          // console.log('matched', ch, hashmap[ch], matched);
          matched++;
        }
      }else{
        if(hashmap[ch]){
          end--;
        }
        let prev = str[start++];
        if(hashmap[prev]){
          hashmap[prev]++;
          matched--;
        }
      }
      if(matched === Object.keys(hashmap).length){
        // console.log('true', matched, hashmap);
        return true;
      }
    }
    return false;
  };

// const input = 'oidbcaf', pattern = 'abc';   // true
const input = 'odicf', pattern = 'dc';    // false
// const input = 'bcdxabcdy', pattern = 'bcdyabcdx';   // true
// const input = 'aaacb', pattern = 'abc';   // true

console.log(find_permutation(input, pattern));