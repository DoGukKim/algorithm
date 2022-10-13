// Title: 크레인 인형뽑기
// 방법 1
// n: board m: moves
// Time: O(n*m)
// Space: O(m)
const main = (n, m) => {
  let result = 0;
  const stack = [];

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (n[j][m[i] - 1] !== 0) {
        // 자리에 인형이 있을 때
        if (stack[stack.length - 1] === n[j][m[i] - 1]) {
          // 스텍의 헤드에 같은 인형이 온다면 터트리고 2개 추가
          stack.pop();
          result += 2;
        } else stack.push(n[j][m[i] - 1]);

        n[j][m[i] - 1] = 0; // 뽑은 자리는 0으로 변환
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
console.log(main(board, moves)); // -> 4

// 방법 2
// n: board m:move
// Time: O(n^2 * m) // -> 재귀호출이 n만큼 호출이 이루어 지기 때문에.
// Space: O(n*m)
const recursion = (n, m) => {
  let result = 0;
  const stack = [];
  const visited = new Set();

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < n.length; j++) {
      const doll = explore(n, m[i] - 1, j, visited);
      if (doll) {
        if (stack[stack.length - 1] === doll) {
          stack.pop();
          result += 2;
        } else stack.push(doll);
      }
      // 인형을 뽑았으니 불필요한 호출을 제거.
      break;
    }
  }

  return result;
};

const explore = (n, colum, row, visited) => {
  const pos = colum + "," + row;

  if (visited.has(pos)) {
    visited.add(colum + "," + row + 1);
    return n[row + 1][colum];
  }

  if (n[row][colum] !== 0) {
    visited.add(pos);
    return n[row][colum];
  }

  return explore(n, colum, row + 1, visited);
};

const n = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const m = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(recursion(n, m));
