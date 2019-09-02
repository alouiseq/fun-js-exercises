function averagePair(ary, avg){
  // add whatever parameters you deem necessary - good luck!
  const bucket = {}
  let found = false
  if(ary.length < 2) return false
  if(ary[ary.length-1] < avg) return false
  
  ary.forEach((elem) => {
      bucket[elem] = true
  })
  ary.forEach((elem) => {
      if(bucket[avg*2 - elem]) found = true
  })
  return found
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));