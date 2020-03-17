/* SOLUTION
Similar to the cyclic sort approach with numbers, place each number into its correct location in the array modifying in place and ignoring the numbers that are out of range. If there's a missing number within the range of the array, you'll find it and you won't have to care about out of range numbers. Once they are in place, iterate over the array again and look for the first positive missing number and return.
Time: O(n) + O(n) => O(n)
Space: O(1)
*/
const find_first_missing_positive = function(nums) {
  let i=0;

  // sort
  while (i<nums.length) {
    j = nums[i] - 1;
    if ((i+1 === nums[i]) || (nums[i] > nums.length) || (nums[i] <= 0)) i++;
    else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // console.log(nums);
  }

  // find missing number
  for (k=0; k<nums.length; k++) {
    if (k+1 !== nums[k]) return k+1;
  }
  return -1;
};

console.log(`ACTUAL: ${find_first_missing_positive([-3, 1, 5, 4, 2])} --`, 'EXPECTED: 3')
console.log(`ACTUAL: ${find_first_missing_positive([3, -2, 0, 1, 2])} --`, 'EXPECTED: 4')
console.log(`ACTUAL: ${find_first_missing_positive([3, 2, 5, 1])} --`, 'EXPECTED: 4')
