import "./styles.css";

/*
Problem:
Write a function triggerActions that outputs the messages in sequential order.
ie. For count 5, the outputs should be:
Processed Action 1
Processed Action 2
Processed Action 3
Processed Action 4
Processed Action 5

Solution 1:
Implement a queue to iterate over, however, this assumes
that the timemout delay is not too large that the msg
is ready during iteration.

Solution 2 (yet to be implemented):
Implement a queue of promises and ensuring that the promise
is fulfilled before moving the next message.
*/

function triggerActions(count) {
  const queue = [];

  const cb = (msg) => {
    // console.log(msg);
    const node = document.createElement("div");
    node.innerHTML = `<div>${msg}</div>`;
    document.getElementById("app").appendChild(node);
    const next = queue.shift();
    if (next) next();
  };

  for (let i = 1; i <= count; i++) {
    queue.push(() => processAction(i, cb));
  }
  queue.shift()();
}

function processAction(i, callback) {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
}

document.getElementById("app").innerHTML = `<h1>Sequential Actions:</h1>`;
triggerActions(5);
