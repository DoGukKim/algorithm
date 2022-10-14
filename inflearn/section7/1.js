// Title: 선택 정렬
// 방법 1
// Time: O(n^2)
// Space: O(1)
// Input: 13, 5, 11, 7, 23, 15
function main(n) {
  for (let i = 0; i < n.length; i++) {
    let min = i;

    for (let j = i + 1; j < n.length; j++) {
      if (n[j] < n[min]) min = j;
    }

    [n[i], n[min]] = [n[min], n[i]];
  }

  return n;
}

console.log(main([13, 5, 11, 7, 23, 15])); // -> [ 5, 7, 11, 13, 15, 23 ]
