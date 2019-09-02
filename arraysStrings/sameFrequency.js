// Given 2 positive integers, find out if the two numbers have the same frequency of digits
// (Time: O(n))
function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  const strNum1 = num1.toString()
  const strNum2 = num2.toString()
  let store1 = {}
  let store2 = {}
  
  if(strNum1.length != strNum2.length) {
      return false
  }
  
  for(let i of strNum1) {
      if(store1[i]) {
          store1[i]++
      } else {
          store1[i] = 1
      }
  }
  
   for(let i of strNum2) {
      if(store2[i]) {
          store2[i]++
      } else {
          store2[i] = 1
      }
  }
  
  for(let key in store2) {
      if(store1[key] != store2[key]) {
          return false
      }
  }
  
  return true
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222));  // false