const remove_duplicates = function(arr) {
  // TODO: Write your code here
  return -1;
};

const inputSet = [
  { arr: [2, 3, 3, 3, 6, 9, 9], expected: 4 },
  { arr: [2, 2, 2, 11], expected: 2 },
];

for(let input of inputSet){
  const {arr, target} = input;
console.log('Input', input, 'Output', `[${remove_duplicates(arr)}]`);
}
