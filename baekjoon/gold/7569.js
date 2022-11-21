// Title: 토마토
// Time: O(hnm)
// Space: O(hnm)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = input.shift().split(" ");
input = input.map((i) => i.split(" ").map(Number));
const graph = [];
const queue = [];

const dx = [-1, 0, 1, 0, 0, 0];
const dy = [0, 1, 0, -1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

let index = 0;
let result = 0;
let unripeTomato = 0;

// 3차원 그래프 형성
for (let i = 0; i < H * N; i++) {
  if (i % N === 0) {
    graph.push(input.splice(0, N));
  }
}

for (let z = 0; z < H; z++) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (graph[z][x][y] === 0) unripeTomato++;
      if (graph[z][x][y] === 1) {
        queue.push([z, x, y, 0]);
      }
    }
  }
}

while (queue.length > index) {
  const [z, x, y, dis] = queue[index++];

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];

    const xInBound = 0 <= nx && nx < N;
    const yInBound = 0 <= ny && ny < M;
    const zInBound = 0 <= nz && nz < H;

    if (xInBound && yInBound && zInBound && graph[nz][nx][ny] === 0) {
      graph[nz][nx][ny] = 1;
      queue.push([nz, nx, ny, dis + 1]);
      unripeTomato--;
    }
  }

  result = dis;
}

console.log(unripeTomato > 0 ? -1 : result);
