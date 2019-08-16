/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// import BST from './bst';
const { bst, tree } = require('./bst');

var flatten = function(root) {
    // traverse tree all the way down preorder approach?
    // once the leafless left child is reached, get parent's
    // right child and link left child to it  
    console.log('Initial BST tree:', root);
};

flatten(tree);