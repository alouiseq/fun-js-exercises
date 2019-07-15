// TODO: Do I need to define a linked list implemention?
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    // if the two integer lists can have varying sizes in comparison,
    // loop over the lists and append 0 values to equate the two lists
    let carry = 0;
    let list1 = l1;
    let list2 = l2;
    let sumList;
    let head = null;
    let curr = null;

    if(!l1.val) return l2;
    if(!l2.val) return l1;

    while(list1 || list2){
        let sum = carry + list1.val + list2.val;
        if(sum > 9){
            if(list1.next || list2.next){
                carry = 1;
                sum -= 10;
            }
        }
        if(!sumList){
            sumList = new ListNode(sum);
            head = sumList;
            curr = sumList;
        }
        else{
            curr.next = new ListNode(sum);
            curr = curr.next;
        }
        list1 = list1.next;
        list2 = list2.next;
    }
    return head;
};

l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
// l2 = new ListNode(0);
l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1,l2));  // 243 + 564 = 708