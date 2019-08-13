class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert (val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;

    while (true) {
      if (!curr.left) {
        curr.left = newNode;
        return this;
      } else if (!curr.right) {
        curr.right = newNode;
        return this;
      } else curr = curr.left;
    }
  }

  insertAll (values) {
    if (!values.length) return this;
    const newNode = new Node(values[0]);
    if (!this.root) {
      this.root = newNode;
    }
    if (values.length === 1) return this;
    let queue = [];

    for (const val of values.slice(1)) {
      queue = [this.root];
      const newNode = new Node(val);
      while (true) {
        const curr = queue.shift();
        if (!curr.left) {
          curr.left = newNode;
          break;
        } else if (!curr.right) {
          curr.right = newNode;
          break;
        } else {
          queue.push(curr.left);
          queue.push(curr.right);
        }
      }
    }
    return this;
  }
}

const bt = new BinaryTree();
// console.log(bt.insertAll([2, 1, 3]));
console.log(bt.insertAll([5,1,4,null,null,3,6]));