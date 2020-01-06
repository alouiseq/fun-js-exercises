/* Solution:
  To account for both negative and positive values, use two pointers - one at the start and one at the end:
  1. Square both values.
  2. Compare the values and insert the larger of the two into the beginning of the result array.
  3. Increment by one if the larger is on the left pointer OR decrement by one if on the right.
  4. Break out of the loop if left === right.
  5. Return the result.
----------------------------------------------
  Time: O(n)
  Space: O(n)
*/
const make_squares = function(arr) {
  squares = []
  let left = 0;
  let right = arr.length - 1;

  while(left !== right){
    if(Math.abs(arr[left]) > Math.abs(arr[right])){
      squares.unshift(Math.pow(arr[left++], 2));
    }else{
      squares.unshift(Math.pow(arr[right--], 2));
    }
  }
  squares.unshift(Math.pow(arr[left], 2));
  return squares;
};

const inputSet = [
  { arr: [-2, -1, 0, 2, 3], expected: [0, 1, 4, 4, 9] },
  { arr: [-3, -1, 0, 1, 2], expected: [0, 1, 1, 4, 9] },
];

for(let input of inputSet){
  const {arr} = input;
  console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${make_squares(arr)}]`);
}
