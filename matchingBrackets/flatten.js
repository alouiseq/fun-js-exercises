function flatten(ary){
  let newAry = [];

  for(let i=0; i<ary.length; i++){
      if(Array.isArray(ary[i])){
//             newAry = newAry.concat(flatten(ary[i]));
          newAry = [...newAry, ...flatten(ary[i])];

      } else{
          newAry.push(ary[i]);
      }
  }
  return newAry;
}

console.log(`[${flatten([1, [2, [3, 4], [[5]]]])}] should be [1,2,3,4,5]`);
console.log(`[${flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])}] should be [1,2,3]`);