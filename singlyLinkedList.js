class Node {
  constructor(val) {
      this.val = val
      this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
      this.head = null
      this.tail = null
      this.length = 0
  }
  push(val) {
      let n = new Node(val)
      if (!this.head) {
          this.head = n
      } else {
          this.tail.next = n
      }
      this.tail = n
      this.length++
      return this
  }
  pop() {
      if (!this.length) return undefined
      let current = this.head
      let newTail = this.head
      while (current.next) {
          newTail = current
          current = current.next
      }
      this.length--
      this.tail = newTail
      this.tail.next = null
      if (!this.length) {
          this.head = null
          this.tail = null
      }
      return current
      
  }
  shift() {
      if (!this.head) return undefined
      const oldHead = this.head
      this.length--
      if (this.length === 0) {
          this.head = null
          this.tail = null
      } else {
          this.head = this.head.next
      }
      return oldHead
  }
  unshift(val) {
      const newNode = new Node(val)
      if (!this.head) {
          this.tail = newNode
      } else {
          newNode.next = this.head
      }
      this.length++
      this.head = newNode
      return this
  }
  get(index) {
      if (index < 0 || index >= this.length) return null
      let counter = 0
      let current = this.head
      while(counter < index){
          counter++
          current = current.next
      }
      return current
  }
  set(index, val){
      const foundNode = this.get(index)
      if(foundNode){
          foundNode.val = val
          return true
      }
      return false
  }
  insert(index, val) {
      if (index < 0 || (index > this.length && this.length)) return false
      if (index === 0) return !!this.unshift(val)
      if (index === this.length) return !!this.push(val)

      const newNode = new Node(val)
      let prev = this.get(index-1)
      let current = prev.next
      prev.next = newNode
      newNode.next = current
      this.length++
      return true
  }
  remove(index){
      if (index < 0 || (index >= this.length && this.length)) return undefined
      if (index === 0) return this.shift()
      if (index === this.length-1) return this.pop()

      let prev = this.get(index-1)
      let curr = prev.next
      prev.next = curr.next
      this.length--
      return curr

  }
  reverse(){
      if(this.length === 0) return undefined
      if(this.length === 1) return this

      let prev = this.head
      let curr = prev.next
      let next = curr.next

      prev.next = null
      let oldTail = this.tail
      this.tail = this.head
      this.head = oldTail

      while(next){
          curr.next = prev
          prev = curr
          curr = next
          next = next.next
      }
      curr.next = prev
      return this
  }
  traverse() {
      let current = this.head
      while(current) {
          console.log(current.val)
          current = current.next
      }
      console.log('length:', this.length)
  }
  
}

let l1 = new SinglyLinkedList()
// list.push('hello')
// list.push('there')
// list.push('mister')
// list.push('big')
// list.push('brown')
// list.push('shoes')
l1.push(2);
l1.push(4);
l1.push(3);
let l2 = new SinglyLinkedList()
l2.push(5);
l2.push(6);
l2.push(4);
// list.traverse()