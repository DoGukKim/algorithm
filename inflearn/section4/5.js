// Title: K번째 큰 수
// 대략 공간 복잡도는 O(n^3/3!)이지만 러프하게 표현합니다.
// Time: O(n^3)
// Space: O(n^3)
function main(n, k, numbers) {
  let result = [];
  const hash = {};

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let l = j + 1; l < n; l++) {
        const sum = numbers[i] + numbers[j] + numbers[l];
        if (!hash[sum]) {
          hash[sum] = true;
          result.push(sum);
        }
      }
    }
  }

  console.log(result.sort((a, b) => b - a)[k - 1]);
}

main(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
