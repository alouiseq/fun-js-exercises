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

const input = [2,1,3];
// const input = [5,1,4,null,null,3,6];

isValidBST(root);