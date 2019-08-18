// Find the longest substring without character duplication
function findLongestSubstring(str){
  // use sliding window pattern
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

findLongestSubstring('longestsubstring')
