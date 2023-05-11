// Title: 수 조작하기 1
// Time: O(n)
// Space: O(1)
function solution(n, control) {
  const map = {
    w: (num) => num + 1,
    s: (num) => num - 1,
    d: (num) => num + 10,
    a: (num) => num - 10,
  };

  let result = n;
  for (let i = 0; i < control.length; i++) {
    result = map[control[i]](result);
  }

  return result;
}
