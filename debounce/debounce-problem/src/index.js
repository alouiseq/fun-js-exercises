import "./styles.css";

/*
1. write a debounce function that takes as arguments:
  a. a function to debounce,
  b. the wait time in milliseconds before executing the debounced function
  ** the timer should reset every time the function is called.
2. Fix any errors in the code.
3. Output the console.log from callAutocompleteApi() to the screen.
*/

// let counter = 1;
// const timeInterval = setInterval(() => {
//   const node = document.createElement("div");
//   node.innerHTML = `<div>${`Time: ${counter++}`}</div>`;
//   document.getElementById("app").appendChild(node);
// }, 1000);

function debounce(fn, delay) {}

function callAutocompleteApi(...params) {
  console.log("called autocomplete", params);
}

const start = () => {
  var slowCall = debounce(callAutocompleteApi, 5000);
  slowCall(10, 20, 30);
  setTimeout(() => slowCall(1, 2, 3, 4, 5, 6, 7, 8), 3000);
};

document.getElementById("app").innerHTML = `<h1>Timer:</h1>`;
start();
