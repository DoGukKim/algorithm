// Title: 홀수
// 7개 자연수가 주어지기 때문에 항상 상수시간을 나타냅니다.
// 방법 1
// Time: O(1)
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

  console.log(sum);
  console.log(min);
}

// 방법 2
// Time: O(1)
// Space: O(1)
function main(numbers) {
  const [sum, min] = dfs(numbers);
  console.log(sum, min);

  function dfs(n) {
    if (n.length === 0) return [0, Infinity];

    const [sum, min] = dfs(n.slice(1));
    const isOdd = n[0] % 2 !== 0;
    return isOdd ? [sum + n[0], Math.min(min, n[0])] : [sum, min];
  }
}

main([12, 77, 38, 41, 53, 92, 85]);
