// Time: O(n*m)
// Space: O(n*m)
const main = (board, moves) => {
  const stack = [];
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (stack[stack.length - 1] === board[j][moves[i] - 1]) {
          stack.pop();
          result += 2;
        } else stack.push(board[j][moves[i] - 1]);

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return result;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(main(board, moves));

// 재귀식 풀이
// Time: O(n^2*m) // maybe..?
// Space: O(n*m)
const recursion = (board, moves) => {
  let result = 0;
  const stack = [];
  const visited = new Set();

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const doll = explore(board, moves[i] - 1, j, visited);
      if (doll) {
        if (stack[stack.length - 1] === doll) {
          stack.pop();
          result += 2;
        } else stack.push(doll);
        break;
      }
    }
  }

  return result;
};

const explore = (board, colum, row, visited) => {
  const pos = colum + "," + row;

  if (visited.has(pos)) {
    const newPos = row + 1 + "," + colum;
    visited.add(newPos);
    return board[row + 1][colum];
  }

  if (board[row][colum] !== 0) {
    visited.add(pos);
    return board[row][colum];
  }

  return explore(board, colum, (row += 1), visited);
};

console.log(recursion(board, moves));
