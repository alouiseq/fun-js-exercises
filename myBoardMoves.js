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

/*
Q: Given a board and a starting position [r,c], find all possible immediate next moves if any.
A valid next move is a move where the value is 0 representing a space and the move cannot be 
done if the spot contains a value of -1 representing a wall or of the move falls outside the 
boundaries of the board.
*/