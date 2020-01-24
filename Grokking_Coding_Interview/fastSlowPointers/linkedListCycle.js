/* Solution
Use a fast and a slow pointer to traverse the list. If the faster pointer is 2x that of the slower, then the two will converge at the time the slower completes a cycle. If null is reached before that time, then the list is not a cycle.
Time: O(n) - linear
Space: O(1) - constat
*/
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function(head) {
  // TODO: Write your code here
  return false
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
