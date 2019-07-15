function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let first = 0
  let pt1 = 0
  let pt2 = 0
  
  if(str2.length < str1.length) {
      return false
  }
  
  while(pt1 < str2.length && pt2 < str2.length) {
      if(str2[pt2] === str1[first]) {
          pt2++
          first++
      } else {
          first = 0
          pt1 = pt2 = pt1 + 1
      }
      
      if(first >= str1.length) {
          return true
      }
  }
  
  return false
}

isSubsequence('hello', 'hello world')
isSubsequence('sing', 'sting')