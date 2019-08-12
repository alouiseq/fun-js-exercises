function minSubArrayLen(ary, val) {
  let minLen = 0
  let currLen = 0
  let currSum = 0
  let i = 1
  let j = 0
  let mem = []
  
  mem[0] = ary[0]
  
  // memoize ary
  while(i < ary.length) {
      mem[i] = mem[i-1] + ary[i]
      i++
  }
  
  i = 1
  j = 0
  while(j < ary.length && j !== i) {
      currLen = i - j
      if(mem[i] - mem[j] >= val) {
          if(!minLen) {
              minLen = currLen
          } else {
              minLen = minLen > currLen ? currLen : minLen
          }
          j++
      } else if(i < ary.length) {
          i++
      } else {
          break
      }
  }
  return minLen
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));