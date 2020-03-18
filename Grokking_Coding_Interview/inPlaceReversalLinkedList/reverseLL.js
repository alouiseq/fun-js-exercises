/* SOLUTION:
Iterate the linked list while maintaining two pointers to track the current and the next node. While iterating, point the current node's next to the next node's next. Point the next node's next to the curr node. Repeat this process as we iterate through the list. When the curr next points to null, then we know that the next node is the new head.
Time: O(n)
Space: 0(1)
*/
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


const reverse = function(head) {
  // TODO: Write your code here
  return head;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
