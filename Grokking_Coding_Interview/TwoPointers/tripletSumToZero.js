const search_triplets = function(arr) {
    triplets = [];
    
    // sort
    const sortedArr = arr.sort((a,b) => {
        if(a<b) return -1;
        else if(a>b) return 1;
        else return 0;
    });

    const pairSumToZero = (arr, target, triplets) => {
        let left = 0;
        let right = arr.length - 1;
        while(left !== right){
            const leftVal = arr[left];
            const rightVal = arr[right];
            const pairSum = leftVal + rightVal;
            if(target === pairSum) triplets.push([-target, leftVal, rightVal]);
            else if(target < pairSum) right--;
            else if(target > pairSum) left++;
        }
    }

    for(let i=0; i<sortedArr.length; i++){
        if(sortedArr[i] === sortedArr[-1]) continue;
        pairSumToZero(sortedArr, -sortedArr[i], triplets);
    }
    return triplets;
};

const inputSet = [
    { arr: [-3, 0, 1, 2, -1, 1, -2], expected: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]] },
    { arr: [-5, 2, -1, -2, 3], expected: [[-5, 2, 3], [-2, -1, 3]] },
];
  
for(let input of inputSet){
    const {arr} = input;
    console.log('Input', JSON.parse(JSON.stringify(input)), 'Output', `[${search_triplets(arr)}]`);
}
