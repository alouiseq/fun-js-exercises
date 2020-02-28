/* SOLUTION
Since the numbers are unique and range from 1 to n, we can iterate over the array of nums and swap/place the current number in the correct position if not in the right place. Keep the index the same until the current number is in the right place. Increment the index once the correct value is in position. Rinse and repeat.
Time: O(n) + O(n-1) => O(n)
Space: O(1)
*/
const cyclic_sort = function(nums) {
  let tempNum = null;
  let i = 0;
  while (i < nums.length) {
    if(i+1 === nums[i]) {
      i++;
      continue;
    };

    tempNum = nums[i];
    nums[i] = nums[tempNum-1];
    nums[tempNum-1] = tempNum;
  }
  return nums;
}

console.log(`[${cyclic_sort([3, 1, 5, 4, 2])}]`, 'EXPECTED: [1,2,3,4,5]');
console.log(`[${cyclic_sort([2, 6, 4, 3, 1, 5])}]`, 'EXPECTED: [1,2,3,4,5,6]')
console.log(`[${cyclic_sort([1, 5, 6, 4, 3, 2])}]`, 'EXPECTED: [1,2,3,4,5,6]')
