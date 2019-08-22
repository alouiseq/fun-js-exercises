/* Q: Given an array of n positive integers and a positive integer s, find the minimal length
    of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
    Try an O(n) solution and then O(n log n).
*/
/* Solution 1: O(n^2)
    Sliding pattern.
    Use left and right indices and start a loop from the beginning.
    Use a variable min (initialize to 0) to track the minimum subarray length that is >= s.
    2. Iterate using the right index and add the values between left and right.
    3. If sum < s, then increment right and add values again.
    4. If sum >= s, take length of subarray between left and right and store the
        smaller of min or subarray.length, then increment left.
    5. Repeat until right reaches nums.length where only left can be incremented.
    6. If sum < s and right is at the end, then break out of the loop and return min.
    7. If sum >= s, continue to increment left and store the smaller of min and subarray.length.
    8. If left reaches the end of loop, break out and return min.
*/
/* Solution 2: O(n)
    Each interation will require adding values in the subarray to find sum. Is there a more
    optimal solution?
    Memoization can help store the sum of the previous values (and current) into the current value
    in the array.
    Use sliding pattern and follow Solution 1. Instead of looping subarray to add values, use
    memoized values to speed up time complexity to O(n).
    1. Follow Solution 1.
    2. Use array mem to store memoized values corresponding to the previous value and current value.
*/
function minSubArrayLen(s, nums) {
  let minLen = 0
  let currLen = 0
  let currSum = 0
  let i = 1
  let j = 0
  let mem = []
  
  mem[0] = nums[0]
  
  // memoize nums 
  while(i < nums.length) {
      mem[i] = mem[i-1] + nums[i];
      i++;
  }
  
  i = 1;
  j = 0;
  while(j < nums.length && j !== i) {
      currLen = i - j;
      if(mem[i] - mem[j] >= s) {
          if(!minLen) {
              minLen = currLen;
          } else {
              minLen = minLen > currLen ? currLen : minLen;
          }
          j++;
      } else if(i < nums.length) {
          i++;
      } else {
          break;
      }
  }
  return minLen;
}

console.log(minSubArrayLen(95, [1,4,16,22,5,7,8,9,10]));
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));