// Time: O(2^n+m)
// Space: O(n+m)
const gridTraveler = (r, c) => {
  if (r === 1 && c === 1) return 1; // 도착점 (1,1)
  if (r === 0 || c === 0) return 0; // 도착하지 않는 점 (0,x) || (x,0)

  return gridTraveler(r - 1, c) + gridTraveler(r, c - 1); // 아래를 향하는 재귀 + 우측으로 향하는 재귀
};

console.log(gridTraveler(3, 3));

// DP
// Time: O(n*m)
// Space: O(n+m)
const gridTravelerM = (r, c, memo = {}) => {
  const rowInBound = 0 < r && r < grid.length;
  const columInBound = 0 < c && c < grid[0].length;
  if (!rowInBound || !columInBound) return false; // 그리드를 벗어나면 false 반환

  const pos = r + "," + c;

  if (pos in memo) return memo[pos];
  if (r === 1 && c === 1) return 1; // 도착점 (1,1)
  if (r === 0 || c === 0) return 0; // 도착하지 않는 점 (0,x) || (x,0)

  memo[pos] = gridTravelerM(r - 1, c, memo) + gridTravelerM(r, c - 1, memo); // 아래를 향하는 재귀 + 우측으로 향하는 재귀
  return memo[pos];
};

console.log(gridTravelerM(3, 3));

// { '1,2': 1, '1,3': 1 }
// { '1,2': 1, '1,3': 1 }
// { '1,2': 1, '1,3': 1 }
// { '1,2': 1, '1,3': 1 }
// { '1,2': 1, '1,3': 1 }
// { '1,2': 1, '1,3': 1, '2,1': 1, '2,2': 2, '2,3': 3 }
// { '1,2': 1, '1,3': 1, '2,1': 1, '2,2': 2, '2,3': 3 }
// { '1,2': 1, '1,3': 1, '2,1': 1, '2,2': 2, '2,3': 3 }
// { '1,2': 1, '1,3': 1, '2,1': 1, '2,2': 2, '2,3': 3 }
// { '1,2': 1, '1,3': 1, '2,1': 1, '2,2': 2, '2,3': 3 }
// -> 6
