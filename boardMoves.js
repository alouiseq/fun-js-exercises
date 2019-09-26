
// Given a board and an end position for the player, write a function to determine if it is possible to travel from every open cell on the board to the given end position.

// board1 = [
//     [ 0,  0,  0, 0, -1 ],    // moves = [[1, 2]]
//     [ -1, -1, -1, 0,  0 ],
//     [ 0,  0,  0, 0,  0 ],
//     [ 0, -1,  0, 0,  0 ],
//     [ 0,  0,  0, 0,  0 ],
//     [ 0,  0,  0, 0,  0 ],
// ]

// board2 = [
//     [  0,  0,  0, 0, -1 ],
//     [  0, -1, -1, 0,  0 ],
//     [  0,  0,  0, 0,  0 ],
//     [ -1, -1,  0, 0,  0 ],
//     [  0, -1,  0, 0,  0 ],
//     [  0, -1,  0, 0,  0 ],
// ]

// board3 = [
//     [ 0,  0,  0,  0,  0,  0, 0 ],
//     [ 0, -1, -1, -1, -1, -1, 0 ],
//     [ 0, -1,  0,  0,  0, -1, 0 ],
//     [ 0, -1,  0,  0,  0, -1, 0 ],
//     [ 0, -1,  0,  0,  0, -1, 0 ],
//     [ 0, -1, -1, -1, -1, -1, 0 ],
//     [ 0,  0,  0,  0,  0,  0, 0 ],
// ]

// board4 = [
//     [0,  0,  0,  0, 0],
//     [0, -1, -1, -1, 0],
//     [0, -1, -1, -1, 0],
//     [0, -1, -1, -1, 0],
//     [0,  0,  0,  0, 0],
// ]

// end1 = (0, 0)
// end2 = (5, 0)

// Expected output:

// isReachable(board1, end1) -> True
// isReachable(board1, end2) -> True
// isReachable(board2, end1) -> False
// isReachable(board3, end1) -> False
// isReachable(board4, end1) -> True

// n: width of the input board
// m: height of the input board

const findLegalMoves = (board, start) => {
  const moves = [];
  const row = start[0];
  const col = start[1];
  // top
  if((row-1 >= 0) && board[row-1][col] === 0){
    moves.push([row-1, col]);
  }
  // right
  if((col+1 < board[0].length) && board[row][col+1] === 0){
    moves.push([row, col+1]);
  }
  // bottom
  if((row+1 < board.length) && board[row+1][col] === 0){
    moves.push([row+1, col]);
  }
  // left
  if((col-1 >= 0) && board[row][col-1] === 0){
    moves.push([row, col-1]);
  }
//   console.log(board[row-1][col]);
  console.log(moves);
  return moves;
}

findLegalMoves(board, [2, 2]);

const isReachable = (board, end) => {
//   const start = [0,0];
//   let moves = findLegalMoves(board, start);
//   if (!moves.length) return false;
  
//   for(let pos of moves) {
//     if (!(findLegalMoves(board, pos).length) return false;
//   }
  
  const moves = [findLegaMoves(board, end)]
  
  for(let pos of moves) {
    if (!(findLegalMoves(board, pos).length) return false;
  }
//   if (!queue.length) return false;
  
  while(queue.length) {
    
  }
  return true;
}


var board = [
  [0,  0,  0, -1, -1],
  [0,  0, -1,  0,  0],
  [0, -1,  0, -1,  0],
  [0,  0, -1,  0,  0],
  [0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0],
];

var start1 = [3, 1];
var start2 = [5, 3];
var start3 = [5, 1];
var start4 = [6, 0];
var start5 = [6, 4];
var start6 = [0, 0];
var start7 = [2, 2];
