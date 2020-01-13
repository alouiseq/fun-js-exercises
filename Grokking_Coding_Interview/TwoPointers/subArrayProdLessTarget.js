const find_subarrays = function(arr, target) {
  result = [];
  // TODO: Write your code here
  return result;
};

// ========================

// Setup data
const inputSet = [
  { arr: [2, 5, 3, 10], targetSum: 30, expected: [[2], [5], [2,5], [3], [5,3], [10]] },
  { arr: [8, 2, 6, 5], targetSum: 50, expected: [[8], [2], [8,2], [6], [2,6], [5], [6,5]] },
];

// Invocation
for(let input of inputSet){
  const { arr, targetSum } = input;
  console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${find_subarrays(arr, targetSum)}]`);
}
