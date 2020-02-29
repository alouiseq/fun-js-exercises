/* SOLUTION
Similar to cyclic sort except this one adds an additional step of having to iterate the array once more after the values have been placed into the correct positions to find the position where no number exists, hence finding the missing number.
Time: O(n) array iteration of placing values + O(n-1) swaps + O(n) check for missing positions => O(n)
Space: O(1)
*/
const find_missing_number = function(nums) {
  let i = 0;
  let tempVal = null;
  
  // add val to nums
  nums = [...nums, null];

  while (i < nums.length) {
    if(i === nums[i] || nums[i] === null) i++;
    else {
      tempVal = nums[i];
      [nums[i], nums[tempVal]] = [nums[tempVal], nums[i]];
      // tempVal = nums[i];
      // nums[i] = nums[tempVal];
      // nums[tempVal] = tempVal;
    }
  }
  
  // find the missing number
  for(let j=0; j<nums.length; j++) {
    if(nums[j] === null) return j;
  }

  return -1;
};

console.log(`ACTUAL: ${find_missing_number([4, 0, 3, 1])} --`, 'EXPECTED: 2')
console.log(`ACTUAL: ${find_missing_number([8, 3, 5, 2, 4, 6, 0, 1])} --`, 'EXPECTED: 7')
