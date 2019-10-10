/* write a debounce function that takes as arguments:
    1. a function to debounce,
    2. the wait time in milliseconds before executing the debounced function
    the timer should reset every time the function is called.
*/

// es6 style
function debounce (fn, delay) {
  let timer;
  return (
    (...params) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...params);
      }, delay);
    }
  );
}

// es5 style 
// function debounce (callback, wait) {
//   var timer;
//   var that = this;
//   return function () {
//       var args = [].slice.call(arguments, 0);
//       clearTimeout(timer);
//       timer = setTimeout(function () {
//           callback.apply(that, args);
//       }, wait);
//   }
// }

// example usage: 
function callAutocompleteApi (...params) {
  // taxing api call out to the autocomplete service
  console.log('called autocomplete', params)
}
var slowCall = debounce(callAutocompleteApi, 5000);
slowCall(10, 20, 30);
setTimeout(() => slowCall(1, 2, 3), 3000);
console.log('WHEN DO I GO?')
// function should now wait 8 secs to fire for the first time