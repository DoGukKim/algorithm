// Title: 점수계산
// Time: O(n)
// Space: O(1)
function main(n) {
  let result = 0;
  let acc = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] === 1) {
      acc++;
      result += acc;
      continue;
    }

    acc = 0;
  }

  console.log(result);
}

main([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
