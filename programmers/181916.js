// Title: 주사위 게임 3
// Time: O(1) // 주사위는 4개로 고정이기 때문입니다.
// Space: O(1)
function solution(a, b, c, d) {
  const dices = [a, b, c, d];

  const map = {};
  for (let i = 0; i < 4; i++) {
    if (!map[dices[i]]) map[dices[i]] = 0;
    map[dices[i]] = map[dices[i]] + 1;
  }

  const diceCounts = Object.values(map).map(Number);
  const diceNumbers = Object.keys(map).map(Number);
  const sameCount = Math.max(...diceCounts);

  if (sameCount === 4) return 1111 * a;
  if (sameCount === 3) {
    const thr = diceNumbers[diceCounts.indexOf(3)];
    const one = diceNumbers[diceCounts.indexOf(1)];
    return (10 * thr + one) ** 2;
  }
  if (sameCount === 2) {
    if (diceNumbers.length === 2)
      return (
        (diceNumbers[0] + diceNumbers[1]) *
        Math.abs(diceNumbers[0] - diceNumbers[1])
      );

    return (
      diceNumbers[diceCounts.indexOf(1)] *
      diceNumbers[diceCounts.lastIndexOf(1)]
    );
  }

  return Math.min(a, b, c, d);
}
