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

// Board game - BFS (Time: 0(n^3))
const isReachable = (board, end) => {
  // traverse the board
  for(let i=0; i<board.length; i++) {
    for(let j=0; j<board[0].length; j++){
      if(!isMiniReachable([i,j]), end) return false;
    }
  }
  return true;

  function isMiniReachable(start, end){
    let queue = [[0,0]];
    let miniq = [];
    let r = 0;
    let c = 0;
    let rowLen = board.length;
    let colLen = board[0].length;
    let moves = [];

    while(queue.length) {
      let next = queue.shift();
      r = next[0];
      c = next[1];
      
      if(r === end[0] && c === end[1]) 
      if(board[r][c] !== 0) {
        if((c+1 >= colLen) && (r+1 >= rowLen)) continue;
        else if(c+1 >= colLen) queue.push([++r, c]);
        else if (r+1 >= rowLen) queue.push([++r, c]);
      } else {
        moves = findLegalMoves(board, [r, c]);
        // if (miniq.length) {
        //   miniq = [ ...miniq, ...moves ];
        // } else {
        //   queue = [ ...queue, ...moves ];
        // }
      }
    }
  }

}