/* SOLUTION
We could store the sum of the squares of the digits into a hash to track which numbers have been visited. If repeatedly calculating the sum of the squares produce a 1 before a number that has been visited, then return true but if the visited occurs first, then return false.
Time: ?? could be low or high
Space: linear
*/
const find_happy_number = function(num) {
  // TODO: Write your code here
  return false;
};


console.log(`${find_happy_number(23)} - expected to be TRUE`)
console.log(`${find_happy_number(12)} - expected to be FALSE`)

/*
  2^2 + 3^2 = 13
  1^2 + 3^2 = 10
  1^2 + 0 = 1
*/