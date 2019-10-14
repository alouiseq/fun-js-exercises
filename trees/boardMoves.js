board1 = [
    [ 0,  0,  0, 0, -1 ],    // start [2,2] moves = [[2,3], [3,2], [2,1]]
    [ -1, -1, -1, 0,  0 ],
    [ 0,  0,  0, 0,  0 ],
    [ 0, -1,  0, 0,  0 ],
    [ 0,  0,  0, 0,  0 ],
    [ 0,  0,  0, 0,  0 ],
]

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

/* Problem 1:
Given a board and a starting position [r,c], find all possible immediate next moves if any.
A valid next move is a move where the value is 0 representing a space and the move cannot be 
done if the spot contains a value of -1 representing a wall or of the move falls outside the 
boundaries of the board.
*/
/* Solution:
Starting at the given position, use if/ese statements for top, right, bottom, left of the position and check if the move is valid.
If the move is valid, add the [r, c] to an array.
At the end of the loop, return the array of all possible moves.
Time: only need to check top/right/bottom/left ==> constant 0(1)
space: worst case is that all surrounding moves are valid, ergo max of 4 spaces ==> 0(1)
*/
const findLegalMoves = (board, start) => {
  const moves = [];
  if (!start || !start.length) return moves;

  let row = start[0];
  let col = start[1];

  // top
  r = row-1;
  if (r>-1 && board[r][col] === 0) {
    moves.push([r, col]);
  }
  // right
  c = col+1;
  if (c>-1 && board[row][c] === 0) {
    moves.push([row, c]);
  }
  // bottom
  r = row+1;
  if (r>-1 && board[r][col] === 0) {
    moves.push([r, col]);
  }
  // left
  c = col-1;
  if (c>-1 && board[row][c] === 0) {
    moves.push([row, c]);
  }

  return moves;
}
// console.log(findLegalMoves(board1, [0, 0]));

/* Problem 2
Given a board and an end position for the player, write a function to determine if it is possible to travel from every open cell on the board to the given end position.
*/
/* Solution:
Leverage findLegaMoves to find the immediate moves available for the current position.
Use BFS (Breadth First Search) Tree approach to traverse each position (node) on the board and use the legal moves (top/right/bottom/left children) to traverse the rest of the board.  
While travering the board, if a position cannot move to the end position, return false and we're done.
Once full board traversal is done, return true that every open cell on the board can in fact travel to the end position.
Note: To avoid traversal duplication, we need to track visited positions. We can use a JS object to track the visited positions.
*/
// TODO: Not yet working 
const isReachable = (board, end) => {
  const visited = {};
  let vstr = '';
  const maxRow = board.length;
  const maxCol = board[0].length;
  let queue = [[0,0]];
  let r;
  let c;
  let next = [];
  let moves = [];

  while(queue.length) {
    next = queue.shift();
    r = next[0];
    c = next[1];
    vstr = next.join('-');
    if (board[r][c] === 0 && !visited[vstr]) {
      visited[vstr] = true;
      moves = findLegalMoves(board, [r,c]);
      if (moves.length) {
        for(let move of moves) {
          if (move[0] === end[0] && move[1] === end[1]) {
            moves = [];
            continue;
          }
        }
        queue = [ ...queue, ...moves ];
      } else {  // if no moves left, then it's unreachable
        return false;
      }
    } else {
      if (c+1 < maxCol) queue.push([r,c+1]);
      else if (r+1 < maxRow) queue.push([r+1,c]);
    }
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

console.log('Reachable?', isReachable(board, [0,0]));
