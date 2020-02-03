/* SOLUTION
Find the middle of the linked list which is when the fast pointer reaches the end. Reverse the middle to the end of the list. Iterate and compare the value between the first half of the list and the 2nd half of the list. If values don't match then immediately return false, otherwise if the end of the list is reached, then return true for the palindrome match.
Time complexity - O(n)
Space complexity - constant
*/
// TODO - Implement the solution
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
