/* SOLUTION
This exercise seems trivial as it is similar to findADuplicate and findMissingNumber except we are looking for both duplicate and missing numbers. Follow a similar approach and iterate through the array. If the duplicate and missing number pair are found, exit the loop and return the pair. If not, continue with the iteration until found or the end of the loop.
Time: O(n)
Space: O(1)
*/
const find_corrupt_numbers = function(nums) {
  // TODO: Write your code here
  return [-1, -1];
};

console.log(`ACTUAL: ${find_corrupt_numbers([3, 1, 2, 5, 2])} --`, 'EXPECTED: [2, 4]')
console.log(`ACTUAL: ${find_corrupt_numbers([3, 1, 2, 3, 6, 4])} --`, 'EXPECTED: [3, 5]')
