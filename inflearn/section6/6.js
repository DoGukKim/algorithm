// Title: 공주 구하기
// Time: O(n)
// Space: O(n)
function main(n, k) {
  const princes = Array.from({ length: n }, (_, i) => i + 1);
  let result = 0;

  while (princes.length) {
    for (let i = 1; i < k; i++) princes.push(princes.shift());
    princes.shift();
    if (princes.length === 1) result = princes.shift();
  }

  console.log(result);
}

main(8, 3);
