/* Solution
This appears to me that the sliding window pattern can be used instead of two pointers. Let's use a variable to hold a temporary subarray and another variable for the output array. We can use two indices (left and right) where the right will iterate through the input, check the product of all the values within the left and right indices and compare with the target. If it's less, then take the current value[right] and add to the output. Then add the value to the subarray, and push the subarray to the output. If product > target, decrease the window from the left index and make sure to take the value outside of the window and remove it from the subarray, and add to the output. Repeat the step until the end of the input. Return the output array.
Time: O(n) for the sliding window
Space: O(n) since the worst case is that only one value is < target at any given point, so it'll take n to store the output. In this case the temp subarray would only hold 1 value at a time.
*/
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
