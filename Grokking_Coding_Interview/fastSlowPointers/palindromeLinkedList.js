class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}


const is_palindromic_linked_list= function(head) {
  // TODO: Write your code here
  return false;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`, 'expected to be TRUE');

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`, 'expected to be FALSE');
