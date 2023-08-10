// title: 카드 뭉치
// time: O(n)
// space: O(1)
function solution(cards1, cards2, goal) {
  let card1Point = 0;
  let card2Point = 0;
  let goalPoint = 0;

  while (goalPoint < goal.length) {
    if (cards1[card1Point] === goal[goalPoint]) {
      card1Point++;
    } else if (cards2[card2Point] === goal[goalPoint]) {
      card2Point++;
    } else {
      return "No";
    }

    goalPoint++;
  }

  return "Yes";
}
