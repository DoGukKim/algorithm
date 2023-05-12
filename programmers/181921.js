// Title: 배열만들기
// Time: O(n*m)
// Space: O(n)
function solution(l, r) {
  const result = [];
  const map = { 5: true, 0: true };

  for (let i = l; i <= r; i++) {
    const itCanBe = checkDigit(i, map);
    if (itCanBe) result.push(i);
  }

  return result.length > 0 ? result : [-1];
}

function checkDigit(n, map) {
  while (n > 0) {
    const digit = n % 10;
    if (!map[digit]) return false;
    n = Math.floor(n / 10);
  }

  return true;
}
