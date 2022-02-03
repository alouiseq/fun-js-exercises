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
*/

function triggerActions(count) {
  const node = document.createElement("div");
  node.innerHTML = "This is a test";
  document.getElementById("app").appendChild(node);
}

function processAction(i, callback) {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
}

document.getElementById("app").innerHTML = `<h1>Sequential Actions:</h1>`;
triggerActions(5);
