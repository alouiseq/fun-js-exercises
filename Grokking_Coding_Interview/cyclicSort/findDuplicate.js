/* SOLUTION
Iterate over the array of numbers and place the current value into the correct index in the array. Check first if the number in the index where the current value is to go:
  - if the number is already in the correct spot, then you have found a dupicated - return the number.
  - if the number is not in the correct spot, then move the current value there and swap the other number to the current index - then rinse and repeat as necessary.
Once the numbers are in the correct spot, then continue iterating - rinse and repeat until the end of the loop. If no duplicates found, return -1.
TIME: O(n)
SPACE: O(1)
*/
const find_duplicate = function(nums) {
  let i = 0, j = -1;
  while (i < nums.length) {
    if (nums[i] === i+1) i++;
    else {
      j = nums[i]-1;
      if (nums[i] === nums[j]) return nums[i];
      [nums[i], nums[j]] = [nums[j], nums[i]];
      // console.log('i', i, 'nums[i]', nums[i], 'nums[j]', nums[j], 'nums', nums);
    }
  }
  return -1;
};

console.log(`ACTUAL: ${find_duplicate([1, 4, 4, 3, 2])} --`, 'EXPECTED: 4')
console.log(`ACTUAL: ${find_duplicate([2, 1, 3, 3, 5, 4])} --`, 'EXPECTED: 3')

console.log(`ACTUAL: ${find_duplicate([2, 4, 1, 4, 4])} --`, 'EXPECTED: 4')
