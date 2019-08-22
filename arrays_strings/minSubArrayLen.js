/* Q: Given an array of n positive integers and a positive integer s, find the minimal length
    of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
    Try an O(n) solution and then O(n log n).
*/
/* Solution:
    
*/
function minSubArrayLen(s, nums) {
  let minLen = 0
  let currLen = 0
  let currSum = 0
  let i = 1
  let j = 0
  let mem = []
  
  mem[0] = nums[0]
  
  // memoizenums 
  while(i < nums.length) {
      mem[i] = mem[i-1] + nums[i]
      i++
  }
  
  i = 1
  j = 0
  while(j < nums.length && j !== i) {
      currLen = i - j
      if(mem[i] - mem[j] >= s) {
          if(!minLen) {
              minLen = currLen
          } else {
              minLen = minLen > currLen ? currLen : minLen
          }
          j++
      } else if(i < nums.length) {
          i++
      } else {
          break
      }
  }
  return minLen
}

console.log(minSubArrayLen(95, [1,4,16,22,5,7,8,9,10]));
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));