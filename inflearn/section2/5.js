// Title: 등수구하기
// Time: O(n^2)
// Space: O(n)
function main(n) {
  const result = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n.length; i++) {
    const moreThanLess = n.filter((s) => n[i] > s).length; // 자신보다 낮은 점수 인원 수
    result[i] = n.length - moreThanLess; // 전체 - 낮은 인원 = i 등수
  }

  console.log(result);
}

main([87, 89, 92, 100, 76]);
