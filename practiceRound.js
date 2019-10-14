// Binary Tree Inorder Traversal

// Recursive
const inorderTraversal = root => {
  let inorderNodes = [];
  let curr = root;
  while(curr) {
    if(curr.left) inorderNodes = inorderHelper(curr.left);
    inorderNodes.push(curr.value);
    if(curr.right) inorderNodes = inorderHelper(curr.right);
  }
  return inorderNodes;
}

// Iterative
const inorderTraversal = root => {
  let inorderNodes = [];
  let curr = null;
  let stack = [root];

  while(stack.length) {
    curr = stack.pop();
    if(curr.left || curr.right) stack.push(curr);
    if(curr.left) stack.push(curr.left);
    else {
      inorderNodes.push(curr.value);
      if(curr.right) stack.push(curr.right);
    }
  }
}