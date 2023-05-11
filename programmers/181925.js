// Title: 수 조작하기 2
// Time: O(n)
// Space: O(n)
function solution(numLog) {
  const map = {
    w: (num) => num + 1,
    s: (num) => num - 1,
    d: (num) => num + 10,
    a: (num) => num - 10,
  };

  let n = numLog[0];
  let result = "";
  for (let i = 1; i < numLog.length; i++) {
    for (const p in map) {
      if (map[p](n) === numLog[i]) {
        result += p;
        n = map[p](n);
      }
    }
  }

  return result;
}
