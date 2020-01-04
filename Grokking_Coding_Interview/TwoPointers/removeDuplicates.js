// Time: O(n)
// Space: O(1)
const remove_duplicates = function(arr) {
  if(!arr) return -1;
  if(arr.length === 1) return 1;

  let l = 0;
  let r = 1;

  while(arr[r]){
    if(arr[l] === arr[r]){
      r++;
    }else{
      arr.splice(l, r-l-1);
      l++;
      r = l+1;
    }
  }

  if(arr[l] === arr[r-1]) arr.splice(l, r-l-1);
  return arr.length;
};

const inputSet = [
  { arr: [2, 3, 3, 3, 6, 9, 9], expected: 4 },
  { arr: [2, 2, 2, 11], expected: 2 },
];

for(let input of inputSet){
  const {arr, target} = input;
console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${remove_duplicates(arr)}]`);
}
