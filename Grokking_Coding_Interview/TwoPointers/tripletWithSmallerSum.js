/* Solution
Similar to both tripletSumCloseToTarget and tripletSumToZero except the the desired output should be smaller than the target. Also the indices should be unique within a triplet. To track this, sort the input and skip the values that are the same as the previous value. The best positions for the two pointers should be start and end of the input.
Time: O(n^2)
Space: O(n)
*/
// TODO
const triplet_with_smaller_sum = function(arr, target) {
  count = -1;
  // TODO: Write your code here
  return count;
};

// ========================

// Setup data
const inputSet = [
  { arr: [-1, 0, 2, 3], targetSum: 3, expected: 2 },
  { arr: [-1, 4, 2, 1, 3], targetSum: 5, expected: 4 },
];

// Invocation
for(let input of inputSet){
  const { arr, targetSum } = input;
  console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${triplet_with_smaller_sum(arr, targetSum)}]`);
}
