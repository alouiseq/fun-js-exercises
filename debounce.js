/* write a debounce function that takes as arguments:
    1. a function to debounce,
    2. the wait time in milliseconds before executing the debounced function
    the timer should reset every time the function is called.
*/

function debounce (fn, delay) {
  return (
    (...params) => {
      setTimeout(() => {
        fn(...params);
      }, delay);
    }
  );
}

// example usage: 
function callAutocompleteApi (...params) {
  // taxing api call out to the autocomplete service
  console.log('called autocomplete', params)
}
var slowCall = debounce(callAutocompleteApi, 5000);
slowCall();
setTimeout(() => slowCall(1, 2, 3), 3000);
// function should now wait 8 secs to fire for the first time