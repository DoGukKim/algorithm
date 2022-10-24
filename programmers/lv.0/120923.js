// Title: 연속된 수의 합
// 방법 1
// Time: O(n)
// Space: O(n)
// InputA: 3, 12 -> [3, 4, 5]
// InputB: 5, -5 -> [-3, -2, -1, 0, 1]
function solution(num, total) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    result.push(i);
  }

  const av = Math.floor(total / num);

  const avIdx = num % 2 === 0 ? Math.floor(num / 2) - 1 : Math.floor(num / 2);

  const bav = result[avIdx];

  return result.map((i) => (i = i + (av - bav)));
}

// otherSolution
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
