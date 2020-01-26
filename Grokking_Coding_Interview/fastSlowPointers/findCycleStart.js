/* Solution
Similar to finding if the list has a cycle, we can return the pointer that points to the node where both pointers meet. Using this convergence, we can use another pointer at head and increment both until both meet. This is the point where the cycle starts.
Time: O(n)
Space O(1)
*/
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){
  let pt2 = cycleMeet(head);
  if (!pt2) return null;
  let pt1 = head;

  while (pt1 !== pt2) {
    pt1 = pt1.next;
    pt2 = pt2.next;
  }
  return pt1;
};

const cycleMeet = function(head) {
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return fast;
  }

  return null;
}

setTimeout(()=>{}, 5);
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`, 'expected to be 3');

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`, 'expected to be 4')

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`, 'expected to be 1')
