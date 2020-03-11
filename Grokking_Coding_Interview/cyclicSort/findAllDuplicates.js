/* SOLUTION
Similar to findDuplicate, but instead use an array to store the dupicates and ensure iteration of the input array until the end of the loop.
Time: O(n)
Space: O(1)
*/
const find_all_duplicates = function(nums) {
  duplicateNumbers = [];
  let i = 0, j = 0;

  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] === i+1) i++;
    else if (nums[i] === nums[j]) {
      duplicateNumbers.push(nums[i]);
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return duplicateNumbers;
};

console.log(`ACTUAL: ${find_all_duplicates([3, 4, 4, 5, 5])} --`, 'EXPECTED: [4, 5]')
console.log(`ACTUAL: ${find_all_duplicates([5, 4, 7, 2, 3, 5, 3])} --`, 'EXPECTED: [3, 5]')
