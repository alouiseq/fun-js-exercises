/* SOLUTION
This exercise seems trivial as it is similar to findADuplicate and findMissingNumber except we are looking for both duplicate and missing numbers. Follow a similar approach and iterate through the array. If the duplicate and missing number pair are found, exit the loop and return the pair. If not, continue with the iteration until found or the end of the loop.
Time: O(n)
Space: O(1)
*/
const find_corrupt_numbers = function(nums) {
  const corrupts = [-1, -1];
  let i = 0, j = 0;

  // find duplicate 
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] === i+1) i++;
    else if (nums[i] === nums[j]) {
      corrupts[0] = nums[i];
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // find missing number
  for (let k=0; k<nums.length; k++) {
    if (k+1 !== nums[k]) {
      corrupts[1] = k+1;
      break;
    }
  }

  return corrupts;
};

console.log(`ACTUAL: [${find_corrupt_numbers([3, 1, 2, 5, 2])}] --`, 'EXPECTED: [2, 4]')
console.log(`ACTUAL: [${find_corrupt_numbers([3, 1, 2, 3, 6, 4])}] --`, 'EXPECTED: [3, 5]')

// [3, 1, 2, 5, 2]
// [2, 1, 3, 5, 2]
// [1, 2, 3, 5, 2]
// [1, 2, 3, 2, 5]