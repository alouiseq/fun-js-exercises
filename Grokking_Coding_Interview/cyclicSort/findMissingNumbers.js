/* SOLUTION
Iterate over the numbers and place them in their correct position but using index + 1 since the range starts at 1. If the number is already in the correct position, then go to the next number until the end of the array. If the number is not in the correct position, swap it with the other number. Duplicates are allowed and when encountered move to the next number in the loop. Iterate another time to find the numbers that are not in the correct positions which will be the missing numbers.
Time: O(n-1) + O(n) => O(n)
Space: O(1)
*/
const find_missing_numbers = function(nums) {
  missingNumbers = [];
  let i=0;
  let count = 0;

  while(i < nums.length && count < 10) {
    let j = nums[i]-1;
    console.log('i', i, 'j', j, 'nums[i]', nums[i], 'nums[j]', nums[j]);
    if ((i+1 === nums[i]) || (nums[i] === nums[j])) i++;
    // swap
    [nums[i], nums[j]] = [nums[j], nums[i]];
    count++;
  }
  for(let x=0; x<nums.length; x++) {
    if (x+1 !== nums[x]) missingNumbers.push(x+1);
  }
  return missingNumbers;
};

console.log(`ACTUAL: ${find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1])} --`, 'EXPECTED: 4, 6, 7')
console.log(`ACTUAL: ${find_missing_numbers([2, 4, 1, 2])} --`, 'EXPECTED: 3')
console.log(`ACTUAL: ${find_missing_numbers([2, 3, 2, 1])} --`, 'EXPECTED: 4')
