/*  Validate a tree to see if it is a binary search tree.
    A binary search tree is a binary tree (zero to two children)
    where the left child of a node is smaller than the node
    and the right child is larger than the node.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if(!root) return false;
  if(!root.left && !root.right) return true;

  // bfs approach
  const queue = [];
  queue.push(root);
  let curr;

  while(queue.length){
      curr = queue.shift();
      if(curr.left){
          if(curr.left.val > curr.val) return false;
          queue.push(curr.left);
      }
      if(curr.right){
          if(curr.right.val < curr.val) return false;
          queue.push(curr.right)
      };
  }
  return true;

};

console.log(isValidBST([2, 1, 3]));
console.log(isValidBST([5,1,4,null,null,3,6]));

// TODO: Need to setup a tree and root