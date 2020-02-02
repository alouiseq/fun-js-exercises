/* SOLUTION 1
We could store the sum of the squares of the digits into a hash to track which numbers have been visited. If repeatedly calculating the sum of the squares produce a 1 before a number that has been visited, then return true but if the visited occurs first, then return false.
Time: ?? could be low or high
Space: linear
*/
/* SOLUTION 2 - Better approach
Use fast and slow pointers. If the number is not a happy number, it ends up in a cycle meaning the two pointers would eventually meet. If the sum of the squares is 1 before they meet, then return true for the happy number, otherwise return false.
Time: length of the cycle with worst at O(n) but we don't know what n is for the sum of squares ??
Space: constant
*/
const find_happy_number = function(num) {
  let slowSumSq = num;
  let fastSumSq = num;
  while (true) {
    slowSumSq = findSumSquare(slowSumSq);
    fastSumSq = findSumSquare(findSumSquare(fastSumSq));
    if (slowSumSq === fastSumSq) break;
  }
  return slowSumSq === 1;
};

const findSumSquare = num => {
  const numStr = num.toString();
  let sumSquare = numStr.split('').reduce((acc, x) => acc + Math.pow(parseInt(x), 2), 0);
  return sumSquare;
}


console.log(`${find_happy_number(23)} - expected to be TRUE`)
console.log(`${find_happy_number(12)} - expected to be FALSE`)

/*
  2^2 + 3^2 = 13
  1^2 + 3^2 = 10
  1^2 + 0 = 1
*/