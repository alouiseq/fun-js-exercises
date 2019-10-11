function maxSubarraySum(ary, sum){
  if(ary.length < sum) {
      return null
  }
  
  let max = 0
  let i = 0
  
  for(; i<sum; i++) {
      max += ary[i]
  }
  
  while(i < ary.length) {
      let temp = max - ary[i-sum] + ary[i]
      if(temp > max) {
          max = temp
      }
      i++
  }
  return max
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));