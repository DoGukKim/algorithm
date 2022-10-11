// Title: 등수구하기
// 방법 1
// Time: O(n^2)
// Space: O(n)
// Input: 87, 89, 92, 100, 76
function main(n) {
  const result = [];

  for (let i = 0; i < n.length; i++) {
    const moreThanLess = n.filter((s) => n[i] > s).length; // 자신보다 낮은 점수 인원 수
    result.push(n.length - moreThanLess); // 전체 - 낮은 인원 = i 등수
  }

  return result;
}

console.log(main([87, 89, 92, 100, 76])); // -> [ 4, 3, 2, 1, 5 ]
