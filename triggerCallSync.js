/* Problem 1:
Write a function triggerActions that outputs the messages in sequential order.
ie. For count 5, the outputs should be:
Processed Action 1
Processed Action 2
Processed Action 3
Processed Action 4
Processed Action 5
*/
/* Solution 1:
Let's break this into pieces:
  1. Use a loop and use the count to control the number of times to iterate over.
  2. Instead of calling processAction directly (because order will not be upheld due to random),
  add to a queue and use the callback to trigger the next action in the queue.
*/
function triggerActions(count) {
  const queue = [];
  const callback = (msg) => {
    console.log(msg);
    queue.length ? (queue.shift())() : null;
  }
  for(let i=0; i<count; i++) {
    queue.push(() => processAction(i, callback));   // i and callback are accessible due to closure.
  }
  (queue.shift())();
}

function processAction(i, callback) {
  setTimeout(function() {
    callback('Processed Action ' + i);
  }, Math.random()*1000);
}

// console.log('TRIGGER SEQUENTIAL ACTIONS WITHOUT PROMISE...');
// triggerActions(5);

/* Problem 2:
What if we immediately call processAction while iterating by the count? How do we maintain the 
sequential order of logs?
*/
/* Solution 2a:
Use built in promises and use Promise.all to return resolved promises in order of params.
*/
function triggerActionsAll(count) {
  const queue = [];

  for(let i=0; i<count; i++) {
    queue.push(new Promise((resolve) => processAction(i, resolve)));
  }
  Promise.all(queue).then(values => {
    for(let val of values) {
      console.log(val);
    }
  })
}

console.log('TRIGGER SEQUENTIAL ACTIONS WITH PROMISE ALL...');
triggerActionsAll(5);

/* Solution 2b:
Use built in promises and chain promises.
*/
function triggerActionsChaining(count) {
  // create initial promise
  let newProm = new Promise((resolve) => processAction(0, resolve));

  for(let i=1; i<count; i++) {
    newProm = newProm.then((res) => {
      console.log(res);
      return new Promise((resolve) => processAction(i, resolve));
    });
  }
  // handle last resolved promise
  newProm.then(res => console.log(res));
}

function processAction(i, callback) {
  setTimeout(function() {
    callback('Processed Action ' + i);
  }, Math.random()*1000);
}

// console.log('TRIGGER SEQUENTIAL ACTIONS WITH PROMISE CHAINING...');
// triggerActionsChaining(5);
