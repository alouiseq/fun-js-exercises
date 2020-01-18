/* Solution
Use two pointers, one on each edge of the input. Compare the values and swap the lower value to the left index. If the value on the left is 0, then increment index. If the value on the right is 2, then decrement the index. Once the indices converge, the iteration is over and the values should be sorted.
Time: O(n)
Space: O(1)
*/
const dutch_flag_sort = function(arr) {
  let l = 0;
  let r = arr.length-1;
  let temp = '';

  while(l !== r) {
    if(arr[l] > arr[r]) [arr[l], arr[r]] = [arr[r], arr[l]];
    if(arr[l] === 0) l++;
    if(arr[r] === 2) r--;
    console.log(arr);
    // if(lval === rval && lval === 1)
  }
};

// ========================

// Setup data
const inputSet = [
  { arr: [1, 0, 2, 1, 0], expected: [0, 0, 1, 1, 2] },
  { arr: [2, 2, 0, 1, 2, 0], expected: [0, 0, 1, 2, 2, 2 ] },
];

// Invocation
for(let input of inputSet){
  const { arr } = input;
  const outputArr = [...arr];
  dutch_flag_sort(outputArr);
  console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${outputArr}]`);
}
