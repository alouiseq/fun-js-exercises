const pairWithTargetSum = function(arr, targetSum) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];

    while(left !== right && !result.length){
        if(arr[left] + arr[right] > targetSum) right--;
        else if(arr[left] + arr[right] < targetSum) left++;
        else result = [left, right];
    }

    return result;
}

const inputSet = [
    { arr: [1, 2, 3, 4, 6], target: 6, expected: [1, 3] },
    { arr: [2, 5, 9, 11], target: 11, expected: [0, 2] },
];

for(let input of inputSet){
    const {arr, target} = input;
  console.log('Input', input, 'Output', `[${pairWithTargetSum(arr, target)}]`);
}