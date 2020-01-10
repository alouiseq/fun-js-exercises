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
