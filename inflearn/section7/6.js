// Title: 장난 꾸러기 현수
// Time: O(n log n)
// Space: O(n)
function main(n, students) {
  const result = [];
  const sorted = students.slice().sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (students[i] !== sorted[i]) result.push(i + 1);
  }

  console.log(result[0], result[1]);
}

main(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]);
