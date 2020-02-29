/* SOLUTION
Iterate over the numbers and place them in their correct position but using index + 1 since the range starts at 1. If the number is already in the correct position, then go to the next number until the end of the array. If the number is not in the correct position, swap it with the other number. Duplicates are allowed and doesn't change our algorithm. Iterate another time to find the missing numbers.
Time: O(n-1) + O(n) => O(n)
Space: O(1)
*/
const find_missing_numbers = function(nums) {
  missingNumbers = [];
  // TODO: Write your code here
  return missingNumbers;
};

console.log(`ACTUAL: ${find_missing_number([2, 3, 1, 8, 2, 3, 5, 1])} --`, 'EXPECTED: 4, 6, 7')
console.log(`ACTUAL: ${find_missing_number([2, 4, 1, 2])} --`, 'EXPECTED: 3')
console.log(`ACTUAL: ${find_missing_number([2, 3, 2, 1])} --`, 'EXPECTED: 4')
