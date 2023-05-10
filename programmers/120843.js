// Title: 공 던지기
// Time: O(nk)
// Space: O(n)
function solution(numbers, k) {
  let cnt = 1;
  let len = numbers.length;
  for (let i = 0; i < len; i++) {
    numbers.push(numbers[i]);
    len++;
    if (i !== 0 && i % 2 === 0) cnt++;
    if (cnt === k) return numbers[i];
  }
}

// Time: O(1)
// Space: O(1)
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}
