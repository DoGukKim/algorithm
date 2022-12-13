// Title: 삽입 정렬
// Time: O(n^2)
// Space: O(1)
function main(n) {
  for (let i = 1; i < n.length; i++) {
    let current = i;

    while (n[current - 1] !== undefined && n[current] < n[current - 1]) {
      [n[current], n[current - 1]] = [n[current - 1], n[current]];
      current--;
    }
  }

  console.log(n);
}

main([11, 7, 5, 6, 10, 9]);
