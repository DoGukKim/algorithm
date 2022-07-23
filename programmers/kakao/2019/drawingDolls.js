const solution = (board, moves) => {
  let result = 0;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (stack[stack.length - 1] !== board[j][moves[i] - 1]) {
          stack.push(board[j][moves[i] - 1]);
        } else {
          stack.pop();
          result += 2;
        }
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
const result = solution(board, moves);
console.log(result);
