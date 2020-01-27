/* Solution
If there is no cycle, then use two pointers (fast and slow) where fast is 2x of slow. Start at the beginning of the list and traverse it until the fast pointer reaches the end (val ==== null). Once fast reaches the end, then the slow pointer would be in the middle of the list. This is for a list that has an even length. If it's odd, then node.next === null needs to be checked.
Time: n/2 => O(n) linear
Space: constant
*/
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_middle_of_linked_list = function(head) {
  let fast = head,
      slow = head;

  while(fast !==  null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Middle Node: ${find_middle_of_linked_list(head).value} - expected to be 3`)

head.next.next.next.next.next = new Node(6)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value} - expected to be 4`)

head.next.next.next.next.next.next = new Node(7)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value} - expected to be 4`)
