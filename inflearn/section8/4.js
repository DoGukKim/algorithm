// Title: 부분집합 구하기(DFS)
// 방법 1
// Time: O(2^n)
// Space: O(n^2)
// Input: 3
function main(n) {
  const result = [];

  function dfs(m, subset) {
    if (m > n) {
      result.push(subset); // 모든 집합에 부분 집합들이 들어가게 됨
      return;
    }

    const subsetWithElement = subset.slice(); // 각 요소가 포함된 집합
    const subsetWithoutElement = subset.slice(); // 각 요소가 포함되지 않는 집합

    subsetWithElement.push(m); // 요소 포함하기

    dfs(m + 1, subsetWithElement); // 요소가 포함된 재귀
    dfs(m + 1, subsetWithoutElement); // 요소가 포함되지 않는 재귀
  }
  dfs(1, []);

  return result;
}
// 재귀 그려보기
//
//                                  root
// 1                    [1]                       []
//                 /           \             /          \
// 2            [1,2]          [1]         [2]          []
//              /   \         /   \       /   \        /  \
// 3        [1,2,3] [1,2]  [1,3]  [1]   [2,3] [2]    [3]   []

// 방법 2
// Time: O(2^n)
// Space: O(n^2) -> n (stack frame) * n - 1 (without element sliced array)
function main(n) {
  const arr = Array.from({ length: n }, (_, val) => val + 1);

  function dfs(numbers) {
    if (numbers.length === 0) return [[]]; // 요소가 없는 집합 반환

    const subsetWithoutElement = dfs(numbers.slice(1)); // 재귀에서 반환된 부분집합들
    const subsetWithElement = [];

    for (let i = 0; i < subsetWithoutElement.length; i++) {
      const subset = [numbers[0], ...subsetWithoutElement[i]]; // 각 요소가 포함되어 있는 집합
      subsetWithElement.push(subset); // 포함되어 있는 집합을 삽입
    }

    return [...subsetWithoutElement, ...subsetWithElement]; // 포함되어 있는 집합과, 그렇지 않은 집합을 반환
  }

  return dfs(arr);
}

console.log(main(3));

//   with                           withOut
// 1 [[1,2,3],[1,2],[1,3],[2,3]]    [[],[3],[2],[1]]
// 2 [[2,3]]                        [[],[3],[2]]
// 3 [[3]]                          [[]]
//   [[]]
