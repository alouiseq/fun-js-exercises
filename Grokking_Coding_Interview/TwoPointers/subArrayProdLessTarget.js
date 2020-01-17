/* Solution
Use two pointers and sliding window method. Use a left pointer to traverse the input. Use a right pointer and another pointer to control the sliding window. The sliding window will find subarrays that will have a product < target.
Time: O(n^3) <== n (traversing the input) * n^2 (finding subarrays)
Space: O(n) since the worst cases are either only elem is < target so result will be [[1], [2], ..., [n]] or that all the elems are < target which will give a result of [1, 2, ..., n, [1,2,...,n]] which is n+1.
*/
// Note: This was a bit of a struggle
const find_subarrays = function(arr, target) {
  let r = -1;
  let subarray = [];
  const result = [];
  let prod = 1;

  for(let l=0; l<arr.length; l++){
    valLeft = arr[l];
    while(prod < target && r < arr.length){
      prod *= arr[++r];
    }

    subarray = [];
    for(let i=l; i<r; i++){
      subarray.push(arr[i]);
      result.push(`[${subarray}]`);
    }

    prod /= valLeft;
  }
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
