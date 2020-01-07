const search_triplets = function(arr) {
    triplets = [];
    // TODO: Write your code here
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
