/* Solution
Use two pointers, one on each edge of the input. Compare the values and swap the lower value to the left index. If the value on the left is 0, then increment index. If the value on the right is 2, then decrement the index. Once the indices converge, the iteration is over and the values should be sorted.
Time: O(n)
Space: O(1)
*/
const dutch_flag_sort = function(arr) {
  let low = 0;
  let high = arr.length-1;
  let i = 0;

  while (low !== high && i < high) {
    if (arr[low] === 0) {
      low++;
      if (low > i) i = low+1;
      continue;
    }
    if (arr[high] === 2) {
      high--;
      continue;
    }

    if (arr[i] === 0){
      [arr[low], arr[i]] = [arr[i], arr[low]];
      low++;
    }
    if (arr[i] === 2){
      [arr[high], arr[i]] = [arr[i], arr[high]];
      high--;
    }
    if (arr[i] === 1){
      i++;
    }
  }
};

// ========================

// Setup data
const inputSet = [
  { arr: [1, 0, 2, 1, 0], expected: [0, 0, 1, 1, 2] },
  { arr: [2, 2, 0, 1, 2, 0], expected: [0, 0, 1, 2, 2, 2 ] },
  { arr: [1, 1, 2, 0, 1, 1], expected: [0, 1, 1, 1, 1, 2 ] },
];

// Invocation
for(let input of inputSet){
  const { arr } = input;
  const outputArr = [...arr];
  dutch_flag_sort(outputArr);
  console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${outputArr}]`);
}
