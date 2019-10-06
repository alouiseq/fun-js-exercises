/* Problem:
Write a function triggerActions that outputs the messages in sequential order.
ie. For count 5, the outputs should be:
Processed Action 1
Processed Action 2
Processed Action 3
Processed Action 4
Processed Action 5
*/
/* Solution:
Let's break this into pieces:
  1. Use a loop and use the count to control the number of times to iterate over.
  2. Instead of calling processAction directly (because order will not be upheld due to random),
  add to a queue and use the callback to trigger the next action in the queue.
*/

function triggerActions(count) {
  const queue = [];
  const callback = (msg) => {
    console.log(msg);
  }
  for(let i=0; i<count; i++) {
    queue.push((i, callback) => processAction(i, callback));
  }
}

function processAction(i, callback) {
  setTimeout(function() {
    callback('Processed Action ' + i);
  }, Math.random()*1000);
}

triggerActions(5);