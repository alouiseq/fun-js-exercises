/* write a reduce function that takes as arguments:
    1. an array to process,
    2. a function to apply to each item in the array, and
    3. an initial value to seed the reduce callback
    
    this function will return the results of processing that array. To make this interesting, don't use the ES5 array methods like forEach, reduce, etc.
*/

function reduce (arr, callback, initial) {
  let result = initial ? initial : null;

  for(let elem of arr) {
    result = callback(result, elem);
  }
  return result;
}

// example usage: 
var sum = reduce([1,2,3,4], function (total, num) {
      return total + num
    }, 0) // == 10
console.log('sum', sum)

var sum = reduce([1,2,3,4], function (total, num) {
      return total + num
    }, 15) // == 25
console.log('sum', sum)

var people = reduce(
  [{name: 'John', age: 14}, { name: 'Sue', age: 20 }], 
  function (current, next) {
    current[next.name] = next.age;
    return current;
  }, {}); // == { 'John': 14, 'Sue': 20 }
console.log('people', people)