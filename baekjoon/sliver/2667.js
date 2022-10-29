// Title: 단지번호붙이기
// Time: O(4^n*m)
// Space: O(n*m)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 지도 크기 제거 후 변환
input.shift();
let matrix = input.map((i) => i.split(""));

let result = 0;
const stack = [];
const visited = new Set();

for (let r = 0; r < matrix.length; r++) {
  for (let c = 0; c < matrix[0].length; c++) {
    if (matrix[r][c] === "1") {
      const count = dfs(r, c);
      // 탐색 후 도출된 집의 수가 0보다 크면 단지 추가 및 집의 수 저장
      if (count > 0) {
        stack.push(count);
        result++;
      }
    }
  }
}

function dfs(r, c) {
  const rowInBound = 0 <= r && r < matrix.length;
  const columInBound = 0 <= c && c < matrix[0].length;
  if (!rowInBound || !columInBound) return 0;
  if (matrix[r][c] === "0") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;

  visited.add(pos);

  let count = 1;

  count += dfs(r - 1, c);
  count += dfs(r, c + 1);
  count += dfs(r + 1, c);
  count += dfs(r, c - 1);

  return count;
}

stack.sort((a, b) => a - b);

console.log(result);
for (let i = 0; i < stack.length; i++) {
  console.log(stack[i]);
}
