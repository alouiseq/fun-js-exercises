class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.isMax = false;
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

    const queue = [this.root];

    for (const val of values.slice(1)) {
      const newNode = new Node(val);
      while (queue.length) {
        curr = queue.shift();
        if (curr.left === undefined) {
          curr.left = newNode;
          break;
        } else if (curr.right === undefined) {
          curr.right = newNode;
          break;
        } else {
          if (curr.left !== null) queue.push(curr.left);
          if (curr.right !== null) queue.push(curr.right);
        }
      }
    }
    return this;
  }
}

const bt = new BinaryTree();
// console.log(bt.insertAll([2, 1, 3]));
console.log(bt.insertAll([5,1,4,null,null,3,6]));
