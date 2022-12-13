// Title: 1부터 N까지의 합
// 방법 1
// Time: O(1)
// Space: O(1)
function main(n) {
  console.log((n + 1) * (n / 2));
}

// 방법 2
// Time: O(n)
// Space: O(1)
function main(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  console.log(result);
}

// 방법 3
// Time: O(n)
// Space: O(n)
function main(n) {
  if (n === 1) return 1;
  console.log(n + main(n - 1));
}

main(6);
main(10);
