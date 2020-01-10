/* Questions to the interviewer
    1. Can the list be sorted?
    2. Can target sum be a negative value?
*/
/* Solution
Similar to tripletSumToZero, but the differences are that instead of 0, we need to calculate the number needed to get to the target sum and that the target sum may not be met. This means that we need to track the sum for each triplet and only keep the one that's closest to the target sum.
Time: Assuming that we can sort, then it would be nlogn + (n*n) => O(n^2)
Space: n (sorted array) => O(n)
*/
// TODO
const triplet_sum_close_to_target = function(arr, target_sum) {
  // TODO: Write your code here
  return -1;
};

// ========================

// Setup data
const inputSet = [
  { arr: [-2, 0, 1, 2], targetSum: 2, expected: 1 },
  { arr: [-3, -1, 1, 2], targetSum: 1, expected: 0 },
  { arr: [1, 0, 1, 1], targetSum: 100, expected: 3 },
];

// Invocation
for(let input of inputSet){
  const { arr, targetSum } = input;
  console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${triplet_sum_close_to_target(arr, targetSum)}]`);
}
