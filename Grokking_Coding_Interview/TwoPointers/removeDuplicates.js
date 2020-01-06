// Time: O(n)
// Space: O(1)
// TODO: Try it with shifting array elements instead of splicing
const remove_duplicates = function(arr) {
  if(!arr) return -1;
  if(arr.length === 1) return 1;

  let next = 0;

  for(i=1; i<arr.length; i++){
    if(arr[next] !== arr[i]){
      arr[++next] = arr[i];
    }
  }
  return next + 1;
};

const inputSet = [
  { arr: [2, 3, 3, 3, 6, 9, 9], expected: 4 },
  { arr: [2, 2, 2, 11], expected: 2 },
];

for(let input of inputSet){
  const {arr, target} = input;
  console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${remove_duplicates(arr)}]`);
}
