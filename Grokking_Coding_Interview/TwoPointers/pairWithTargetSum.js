const pairWithTargetSum = function(arr, targetSum) {
    // TODO: Write your code here
    return [-1, -1];
}

const inputSet = [
    { arr: [1, 2, 3, 4, 6], target: 6, expected: [1, 3] },
    { arr: [2, 5, 9, 11], target: 11, expected: [0, 2] },
];

for(let input of inputSet){
    const {arr, target} = input;
  console.log('Input', input, 'Output', `'${pairWithTargetSum(arr, target)}'`);
}