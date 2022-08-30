// 예산
// Time: O(n)
// Space: O(1)
const main = (d, budget) => {
  d.sort((a, b) => a - b);

  // 정렬된 신청 목록에 첫 원소가 예산보다 크면 지원해 줄 수 있는 부서가 없음.
  if (d[0] > budget) return 0;

  let sum = 0;
  let result = 0;

  for (let i = 0; i < d.length; i++) {
    if (sum + d[i] > budget) break;
    sum += d[i];
    result++;
  }

  return result;
};

console.log(main([1, 3, 2, 5, 4], 9));
console.log(main([2, 2, 3, 3], 10));
