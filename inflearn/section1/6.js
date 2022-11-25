// Title: 홀수
// 방법 1
// Time: O(n)
// Space: O(1)
function main(numbers) {
  let sum = 0;
  let min = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i];
      if (numbers[i] < min) min = numbers[i];
    }
  }

  console.log(sum); // -> 256
  console.log(min); // -> 41
}

// 방법 2
// Time: O(n^2)
// Space: O(n)
function main(numbers) {
  function dfs(n) {
    if (n.length === 0) return [0, Infinity];

    const [sum, min] = dfs(n.slice(1));

    const isOdd = n[0] % 2 !== 0;
    return isOdd ? [sum + n[0], Math.min(min, n[0])] : [sum, min]; // 홀수 일시 계산 or 아무 것도 안함
  }

  const [sum, min] = dfs(numbers);
  return sum, min;
}

console.log(main([12, 77, 38, 41, 53, 92, 85]));
