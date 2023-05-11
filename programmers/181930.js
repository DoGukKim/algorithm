// Title: 주사위 게임 2
// Time: O(1)
// Space: O(1)
function solution(a, b, c) {
  if (a !== b && b !== c && a !== c) return a + b + c;
  if (a === b && b === c && a === c)
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );

  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}
