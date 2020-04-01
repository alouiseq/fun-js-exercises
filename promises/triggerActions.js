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
Start a loop that uses count as the end of the loop.  
Use a queue to store processAction for each count iteration.  
After the loop, remove the first from the queue and run processAction for the initial run.  
Write a callback function that on resolve of each setTimeout, triggers the execution of the next processAction.  
Once the queue is empty, then we're done.
Time complexity: linear 0(n)
Space complexity: the queue will also be linear O(n)
*/
function triggerActions(count) {
  const queue = [];

  const cb = (msg) => {
    console.log(msg);
    const next = queue.shift();
    if(next) next();
  };

  for(let i=1; i<=count; i++) {
    queue.push(() => processAction(i, cb));
  }
  (queue.shift())();
}

function processAction(i, callback) {
  setTimeout(function() {
    callback('Processed Action ' + i);
  }, Math.random()*1000);
}

console.log('TRIGGER SEQUENTIAL ACTIONS WITHOUT PROMISE...');
triggerActions(5);

/* Problem 2:
What if we immediately call processAction while iterating by the count? How do we maintain the 
sequential order of logs?
*/
/* Solution 2a:
We can leverage JS built in promises and using Promise.all(...) to resolve when all the promises have resolved.  
This will output the correct sequential order as long as we pass the sequential order of the parameters.  
The returned values would be in the order in which the parameters were passed.
*/
function triggerActionsAll(count) {
  const queue = [];

  for(let i=1; i<=count; i++) {
    queue.push(new Promise(resolve => {
      processAction(i, resolve);
    }));
  }
  Promise.all(queue)
    .then(res => {
      for(val of res) {
        console.log(val);
      }
    });
}

// console.log('TRIGGER SEQUENTIAL ACTIONS WITH PROMISE ALL...');
// triggerActionsAll(5);

/* Solution 2b:
We can use JS built in promises and leverage promise chaining.
*/
function triggerActionsChaining(count) {
  let prom = new Promise(resolve => {
    processAction(1, resolve);
  });
  for(let i=2; i<=count; i++) {
    prom = prom.then(res => {
      console.log(res);
      return new Promise(resolve => {
        processAction(i, resolve);
      });
    });
  }
  prom.then(res => {
    console.log(res);
  });
}

// console.log('TRIGGER SEQUENTIAL ACTIONS WITH PROMISE CHAINING...');
// triggerActionsChaining(5);
