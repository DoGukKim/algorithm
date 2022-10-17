// Title: 공 던지기
// 방법 1
// Time: O(n)
// Space: O(1)
// Input: [1, 2, 3, 4], 2
function solution(numbers, k) {
  let c = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (i !== 0 && i % 2 === 0) c++;
    if (c === k) {
      return numbers[i];
    }
    numbers.push(numbers[i]);
  }
} // -> 3

// other solution
function solution(numbers, k) {
  const goNext = (current) => (current + 2) % numbers.length;
  let current = 0;
  for (let i = 0; i < k - 1; i++) current = goNext(current);
  return numbers[current];
}
