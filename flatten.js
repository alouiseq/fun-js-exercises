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

// flatten([1, [2, [3, 4], [[5]]]]);
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])